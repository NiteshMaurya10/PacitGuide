# PacitGuide

A runnable decision-support prototype for the MoFPI FoodTech problem statement: **AI-Based Intelligent Food Packaging Material Recommendation System for Food Commodities**.

## Run it

For the full web app and recommendation API:

```powershell
python -m pip install -r requirements.txt
python -m uvicorn main:app --reload --port 8000
```

Then open [http://127.0.0.1:8000](http://127.0.0.1:8000). Interactive API documentation is available at [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

You can also open [index.html](index.html) directly. In that mode it uses an offline ruleset so the user experience remains demonstrable without a server.

Run the regression tests with:

```powershell
python -m pytest -q
```

## What it demonstrates

- Product and storage-condition capture: commodity, moisture, fat, pH, temperature, RH, shelf life, distribution stress, and respiration rate.
- FastAPI endpoints: `POST /api/v1/recommend`, `GET /api/v1/materials`, and `GET /health`.
- Explainable food-to-material recommendation logic covering fresh produce, snacks, nuts, coffee, dairy, powder, and frozen foods.
- Biophysical screening calculations: Q10-adjusted respiration / OTR target for fresh produce and a moisture-capacity / WVTR target for dry foods.
- Compatibility filters plus a three-path recommendation: maximum protection, cost-optimised, and eco-optimised.
- Package structures and practical specifications: OTR, WVTR, thickness, transportation strength, estimated shelf life, MAP guidance, and a QR-ready traceability payload.
- Alternative materials, relative cost, and circularity/recyclability signals.
- Responsive interface and print-to-PDF export through the **Export summary** button.

## Implementation note

The engine in `engine/` is deliberately explainable and rule-based, which is ideal for an early pilot: food technologists can review and adjust the material assumptions. In a production build, retain these guardrail rules and add a validated data layer containing actual film-test values, commodity shelf-life trials, local converter availability, regulatory/migration requirements, and pricing. This can then support ranking models and continuously improved recommendations.
