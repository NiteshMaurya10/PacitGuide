"""FastAPI application for the PacitGuide decision-support prototype."""

from __future__ import annotations

from pathlib import Path

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse

from engine.materials import public_materials
from engine.models import FoodItemInput, RecommendationOutput
from engine.recommender import recommend


ROOT = Path(__file__).parent
app = FastAPI(
    title="PacitGuide API",
    version="0.1.0",
    description="Explainable packaging recommendations for food commodities.",
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with allowed deployment origins in production.
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "pacitguide"}


@app.get("/api/v1/materials")
def list_materials() -> list[dict[str, object]]:
    return public_materials()


@app.post("/api/v1/recommend", response_model=RecommendationOutput)
def create_recommendation(payload: FoodItemInput) -> RecommendationOutput:
    try:
        return recommend(payload)
    except ValueError as exc:
        raise HTTPException(status_code=422, detail=str(exc)) from exc


@app.get("/", include_in_schema=False)
def web_app() -> FileResponse:
    return FileResponse(ROOT / "index.html")


@app.get("/{asset_name}", include_in_schema=False)
def web_assets(asset_name: str) -> FileResponse:
    """Serve only known UI assets; API routes are defined above this fallback."""
    allowed = {"styles.css", "app.js"}
    if asset_name not in allowed:
        raise HTTPException(status_code=404, detail="Not found")
    return FileResponse(ROOT / asset_name)
