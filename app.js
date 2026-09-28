const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const products = {
  tomato: {
    type: 'Fresh produce', note: 'Respiration-sensitive · high moisture', description: 'Tomatoes continue to respire after harvest and can soften or lose moisture without a breathable pack.', icon: '🍅', moisture: 94, fat: .2, ph: 4.3, storage: 'chilled', temperature: 10, humidity: 90, life: 14, respiration: 'high', fresh: true,
    result: { structure: 'Micro-perforated BOPP / LDPE pouch', description: 'A breathable pack protects fresh produce while allowing the gas exchange needed to slow respiration and retain texture.', otr: '8,000–15,000', otrCaption: 'High for produce respiration', wvtr: '8–14', wvtrCaption: 'Moderate moisture release', thickness: '35–45', thicknessCaption: 'Flexible, puncture-resistant', life: '12–16', lifeCaption: 'At selected conditions', fit: 94, confidence: 92, eco: 76, reason: 'gas exchange & protection', tags: ['Fresh produce', 'MAP compatible', 'Recyclable stream'], map: 'Use a breathable film or controlled micro-perforations. Verify gas equilibrium with a pack trial before release.', gas: ['3–5%', '5–8%', 'Balance'], recycle: 76, efficiency: 68, cost: 45, recycleLabel: 'Good', efficiencyLabel: 'Good', costLabel: 'Medium', alt: [['Perforated LDPE bag', 'Lowest-cost breathable option', '87'], ['Compostable PLA film', 'Bio-based; validate performance', '78']] }
  },
  leafy: {
    type: 'Fresh produce', note: 'Very high respiration · dehydration risk', description: 'Leafy vegetables wilt quickly and need high gas exchange with humidity control to remain crisp.', icon: '🥬', moisture: 92, fat: .3, ph: 6.0, storage: 'chilled', temperature: 4, humidity: 95, life: 7, respiration: 'high', fresh: true,
    result: { structure: 'Anti-fog micro-perforated BOPP / PE pouch', description: 'A high-breathability, anti-fog pack manages leafy greens’ high respiration while reducing condensation and wilting.', otr: '15,000–25,000', otrCaption: 'Very high gas exchange', wvtr: '12–20', wvtrCaption: 'Prevents surface condensation', thickness: '30–40', thicknessCaption: 'Lightweight fresh-pack film', life: '5–8', lifeCaption: 'At 4°C cold chain', fit: 93, confidence: 91, eco: 73, reason: 'anti-fog & breathability', tags: ['Fresh produce', 'High respiration', 'Anti-fog'], map: 'Use anti-fog film with laser micro-perforations. Pre-cool leaves before packing and maintain the cold chain.', gas: ['2–5%', '5–10%', 'Balance'], recycle: 72, efficiency: 78, cost: 49, recycleLabel: 'Good', efficiencyLabel: 'High', costLabel: 'Medium', alt: [['Perforated LDPE bag', 'Simple, economical handling', '86'], ['Cellulose-based film', 'Home-compostable material route', '75']] }
  },
  mango: {
    type: 'Fresh produce', note: 'Climacteric fruit · ethylene-sensitive', description: 'Mangoes ripen after harvest and need a tough, ventilated pack that reduces moisture loss and bruising.', icon: '🥭', moisture: 82, fat: .6, ph: 4.0, storage: 'ambient', temperature: 13, humidity: 85, life: 14, respiration: 'medium', fresh: true,
    result: { structure: 'Perforated LDPE liner with corrugated tray', description: 'A tough, breathable liner manages fruit respiration and limits moisture loss during handling and distribution.', otr: '10,000–18,000', otrCaption: 'Controlled fruit respiration', wvtr: '10–16', wvtrCaption: 'Reduces mass loss', thickness: '40–55', thicknessCaption: 'High handling strength', life: '12–18', lifeCaption: 'At 13°C', fit: 91, confidence: 89, eco: 79, reason: 'moisture retention & strength', tags: ['Fresh produce', 'Ethylene aware', 'Transit ready'], map: 'Use perforations rather than a sealed atmosphere. Consider ethylene absorbers for extended distribution.', gas: ['5–8%', '3–6%', 'Balance'], recycle: 80, efficiency: 73, cost: 42, recycleLabel: 'Good', efficiencyLabel: 'Good', costLabel: 'Low', alt: [['Ventilated clamshell + liner', 'Premium display and protection', '85'], ['Paper-based tray + liner', 'Lower plastic presentation', '77']] }
  },
  chips: {
    type: 'Dry snack', note: 'Low moisture · oxidation-sensitive', description: 'Potato chips and namkeen lose crispness when they absorb moisture, while oils can turn rancid in oxygen.', icon: '🥔', moisture: 2, fat: 35, ph: 6.4, storage: 'ambient', temperature: 25, humidity: 60, life: 120, respiration: 'none', fresh: false,
    result: { structure: 'Metallized BOPP / LDPE nitrogen-flush pouch', description: 'A high-barrier metallized laminate keeps oxygen and moisture out, protecting crispness and slowing rancidity.', otr: '< 20', otrCaption: 'Very high oxygen barrier', wvtr: '< 1.0', wvtrCaption: 'Keeps product crisp', thickness: '45–55', thicknessCaption: 'Strong, machinable laminate', life: '100–130', lifeCaption: 'Under ambient storage', fit: 96, confidence: 95, eco: 61, reason: 'crispness & oxidation barrier', tags: ['Dry snack', 'Nitrogen flush', 'High barrier'], map: 'Nitrogen flush is recommended. Target residual oxygen below 2% and validate seal integrity on the packing line.', gas: ['< 2%', '< 1%', '98%+'], recycle: 45, efficiency: 80, cost: 51, recycleLabel: 'Limited', efficiencyLabel: 'High', costLabel: 'Medium', alt: [['EVOH mono-PE pouch', 'Recyclable high-barrier alternative', '84'], ['PET / PE laminate', 'Clear premium-pack option', '81']] }
  },
  nuts: {
    type: 'Oil-rich dry food', note: 'High lipid · light and oxygen sensitive', description: 'Roasted nuts are rich in oils, so light, oxygen, and humidity must be blocked to preserve flavour and crunch.', icon: '🥜', moisture: 3, fat: 52, ph: 6.2, storage: 'ambient', temperature: 22, humidity: 55, life: 180, respiration: 'none', fresh: false,
    result: { structure: 'PET / aluminium foil / LDPE laminate', description: 'An opaque foil laminate delivers the oxygen, light, and moisture barrier required to prevent lipid oxidation.', otr: '< 0.1', otrCaption: 'Near-total oxygen barrier', wvtr: '< 0.1', wvtrCaption: 'Excellent moisture barrier', thickness: '70–90', thicknessCaption: 'Premium protective structure', life: '150–210', lifeCaption: 'With nitrogen flushing', fit: 97, confidence: 96, eco: 42, reason: 'maximum aroma & oxidation protection', tags: ['Oil-rich', 'Light barrier', 'Nitrogen flush'], map: 'Nitrogen flush is strongly recommended. Add an oxygen absorber for premium products or long distribution routes.', gas: ['< 1%', '< 1%', '99%'], recycle: 25, efficiency: 70, cost: 73, recycleLabel: 'Difficult', efficiencyLabel: 'Good', costLabel: 'High', alt: [['Metallized PET / PE', 'Lower cost high-barrier path', '90'], ['EVOH mono-PE pouch', 'Better circularity; validate barrier', '77']] }
  },
  coffee: {
    type: 'Aroma-sensitive dry food', note: 'Aroma volatile · oxygen sensitive', description: 'Ground coffee releases carbon dioxide after roasting and loses its aroma quickly when exposed to oxygen.', icon: '☕', moisture: 3, fat: 15, ph: 5.0, storage: 'ambient', temperature: 22, humidity: 55, life: 180, respiration: 'none', fresh: false,
    result: { structure: 'PET / aluminium foil / PE pouch with valve', description: 'A foil laminate protects aroma and oils; a one-way degassing valve safely releases carbon dioxide from freshly roasted coffee.', otr: '< 0.1', otrCaption: 'Ultra-high aroma barrier', wvtr: '< 0.1', wvtrCaption: 'Preserves fresh roast', thickness: '90–110', thicknessCaption: 'Valve-compatible laminate', life: '150–210', lifeCaption: 'At ambient storage', fit: 97, confidence: 95, eco: 38, reason: 'aroma retention & degassing', tags: ['Aroma-sensitive', 'Degassing valve', 'Premium barrier'], map: 'Do not use a standard MAP. Include a one-way degassing valve and validate package expansion after roasting.', gas: ['< 1%', '< 1%', 'Balance'], recycle: 20, efficiency: 67, cost: 78, recycleLabel: 'Difficult', efficiencyLabel: 'Good', costLabel: 'High', alt: [['Metallized mono-PE pouch', 'Lower-impact premium alternative', '79'], ['Tin-tie paper pouch + liner', 'Retail-focused presentation', '72']] }
  },
  milkpowder: {
    type: 'Hygroscopic powder', note: 'Moisture-sensitive · oxidation-sensitive', description: 'Milk powder readily absorbs humidity, which causes caking; its fats also need oxygen protection for a long shelf life.', icon: '🥛', moisture: 3, fat: 26, ph: 6.7, storage: 'ambient', temperature: 22, humidity: 50, life: 365, respiration: 'none', fresh: false,
    result: { structure: 'PET / aluminium foil / LDPE laminate', description: 'A robust foil laminate gives excellent moisture and oxygen protection to prevent caking, flavour loss, and fat oxidation.', otr: '< 0.1', otrCaption: 'Ultra-high oxygen barrier', wvtr: '< 0.1', wvtrCaption: 'Prevents caking', thickness: '85–110', thicknessCaption: 'Powder-fill durable structure', life: '300–365', lifeCaption: 'At dry ambient storage', fit: 98, confidence: 96, eco: 40, reason: 'moisture & oxidation barrier', tags: ['Hygroscopic', 'High barrier', 'Long shelf life'], map: 'Flush with nitrogen for products with high fat content. Keep headspace and seal surfaces free from powder.', gas: ['< 2%', '< 1%', '98%+'], recycle: 20, efficiency: 70, cost: 76, recycleLabel: 'Difficult', efficiencyLabel: 'Good', costLabel: 'High', alt: [['EVOH mono-PE pouch', 'More recyclable barrier option', '82'], ['HDPE container + induction seal', 'Rigid, reclosable format', '78']] }
  },
  paneer: {
    type: 'High-moisture dairy', note: 'Perishable · microbial spoilage risk', description: 'Paneer is a moist, chilled dairy food that needs a strong seal and oxygen barrier to help control spoilage.', icon: '🧀', moisture: 55, fat: 22, ph: 5.8, storage: 'chilled', temperature: 4, humidity: 85, life: 20, respiration: 'none', fresh: false,
    result: { structure: 'PA / PE vacuum or MAP pouch', description: 'A puncture-resistant polyamide barrier pouch supports vacuum or MAP packing to manage microbial spoilage in chilled storage.', otr: '< 50', otrCaption: 'High oxygen barrier', wvtr: '< 3', wvtrCaption: 'Prevents moisture loss', thickness: '70–90', thicknessCaption: 'Puncture-resistant cold seal', life: '16–24', lifeCaption: 'At 4°C cold chain', fit: 95, confidence: 93, eco: 54, reason: 'chilled shelf life & seal strength', tags: ['Chilled dairy', 'Vacuum capable', 'High barrier'], map: 'Use vacuum pack for compact blocks, or MAP with CO₂ for sliced products. Maintain 0–4°C through distribution.', gas: ['< 1%', '30–40%', 'Balance'], recycle: 35, efficiency: 72, cost: 60, recycleLabel: 'Limited', efficiencyLabel: 'Good', costLabel: 'Medium', alt: [['EVOH / PE pouch', 'Recyclable-ready option', '82'], ['PET tray + lidding film', 'Retail display format', '80']] }
  },
  frozen: {
    type: 'Frozen produce', note: 'Frozen chain · puncture and freezer burn risk', description: 'Frozen vegetables require a flexible, crack-resistant pack that keeps moisture in and limits freezer burn.', icon: '🫛', moisture: 78, fat: .5, ph: 6.1, storage: 'frozen', temperature: -18, humidity: 70, life: 270, respiration: 'none', fresh: false,
    result: { structure: 'Co-extruded PE freezer-grade pouch', description: 'A flexible, impact-resistant freezer pouch prevents moisture migration and cracking at low temperatures.', otr: '< 150', otrCaption: 'Moderate oxygen barrier', wvtr: '< 2.5', wvtrCaption: 'Prevents freezer burn', thickness: '70–85', thicknessCaption: 'Low-temperature durability', life: '240–300', lifeCaption: 'At −18°C', fit: 94, confidence: 92, eco: 74, reason: 'freezer durability & moisture barrier', tags: ['Frozen', 'Freezer grade', 'Recyclable PE'], map: 'MAP is not needed. Focus on fast freezing, low residual air, and freeze–thaw resistant seals.', gas: ['N/A', 'N/A', 'N/A'], recycle: 78, efficiency: 75, cost: 44, recycleLabel: 'Good', efficiencyLabel: 'Good', costLabel: 'Low', alt: [['Metallized BOPP / PE pouch', 'Added light and moisture protection', '85'], ['Paper / PE hybrid pouch', 'Shelf-facing brand opportunity', '74']] }
  },
  custom: {
    type: 'Custom food product', note: 'Set your own product parameters', description: 'Use this profile when your product is not listed; enter its measured properties and validate the result with pack trials.', icon: '🍱', moisture: 40, fat: 5, ph: 5.5, storage: 'ambient', temperature: 25, humidity: 60, life: 30, respiration: 'none', fresh: false,
    result: { structure: 'PET / PE high-clarity pouch', description: 'A versatile clear laminate with a moderate barrier profile. Fine-tune it using the entered product and shelf-life conditions.', otr: '100–300', otrCaption: 'Moderate oxygen barrier', wvtr: '3–6', wvtrCaption: 'Moderate moisture barrier', thickness: '55–70', thicknessCaption: 'General-purpose strength', life: '25–40', lifeCaption: 'Estimated from inputs', fit: 82, confidence: 77, eco: 69, reason: 'balanced everyday protection', tags: ['Custom profile', 'Validate with trials', 'Versatile'], map: 'MAP suitability depends on product microflora and headspace. Run a shelf-life and seal-integrity trial before commercialization.', gas: ['Product-specific', 'Product-specific', 'Balance'], recycle: 62, efficiency: 70, cost: 53, recycleLabel: 'Moderate', efficiencyLabel: 'Good', costLabel: 'Medium', alt: [['Mono-PE pouch', 'Better recyclability and economy', '78'], ['Metallized BOPP / PE', 'Higher barrier for dry foods', '82']] }
  }
};

let selectedTransport = 'stable';
let toastTimer;
let activeMaterialFilter = 'all';
let materialCatalog = [];
let currentRecommendation = null;
const HISTORY_KEY = 'pacitguide.recommendation-history.v1';

const fallbackMaterials = [
  { code: 'ldpe', name: 'LDPE', otr_at_25um_cc_m2_day: 8000, wvtr_at_25um_g_m2_day: 12, cost_index: 2, sustainability_screening_score: 82, recyclable: true, freezer_safe: true, heat_sealable: true },
  { code: 'lldpe', name: 'LLDPE', otr_at_25um_cc_m2_day: 7000, wvtr_at_25um_g_m2_day: 10, cost_index: 2.2, sustainability_screening_score: 82, recyclable: true, freezer_safe: true, heat_sealable: true },
  { code: 'hdpe', name: 'HDPE', otr_at_25um_cc_m2_day: 1800, wvtr_at_25um_g_m2_day: 3.5, cost_index: 2.4, sustainability_screening_score: 84, recyclable: true, freezer_safe: true, heat_sealable: false },
  { code: 'bopp', name: 'BOPP', otr_at_25um_cc_m2_day: 1400, wvtr_at_25um_g_m2_day: 5, cost_index: 2.7, sustainability_screening_score: 68, recyclable: false, freezer_safe: false, heat_sealable: false },
  { code: 'pet', name: 'PET', otr_at_25um_cc_m2_day: 95, wvtr_at_25um_g_m2_day: 5.5, cost_index: 3.2, sustainability_screening_score: 65, recyclable: false, freezer_safe: true, heat_sealable: false },
  { code: 'pa', name: 'PA / Nylon', otr_at_25um_cc_m2_day: 45, wvtr_at_25um_g_m2_day: 12, cost_index: 4.4, sustainability_screening_score: 46, recyclable: false, freezer_safe: true, heat_sealable: false },
  { code: 'evoh', name: 'EVOH', otr_at_25um_cc_m2_day: 1.2, wvtr_at_25um_g_m2_day: 40, cost_index: 5.2, sustainability_screening_score: 72, recyclable: true, freezer_safe: true, heat_sealable: false },
  { code: 'met_pet', name: 'Metallized PET', otr_at_25um_cc_m2_day: 18, wvtr_at_25um_g_m2_day: .8, cost_index: 4.5, sustainability_screening_score: 42, recyclable: false, freezer_safe: true, heat_sealable: false },
  { code: 'al_foil', name: 'Aluminium foil', otr_at_25um_cc_m2_day: .05, wvtr_at_25um_g_m2_day: .05, cost_index: 6, sustainability_screening_score: 25, recyclable: false, freezer_safe: true, heat_sealable: false },
  { code: 'pla', name: 'PLA', otr_at_25um_cc_m2_day: 600, wvtr_at_25um_g_m2_day: 25, cost_index: 4.8, sustainability_screening_score: 74, recyclable: false, freezer_safe: false, heat_sealable: true },
];

const materialDetails = {
  ldpe: { madeOf: 'Low-density polyethylene, a flexible ethylene-based plastic.', usedFor: 'Sealant layers, bread bags, produce bags, liners, and squeeze packs.' },
  lldpe: { madeOf: 'Linear low-density polyethylene made from ethylene with small alpha-olefin comonomers.', usedFor: 'Tough sealant layers, stretch films, freezer pouches, and heavy-duty bags.' },
  hdpe: { madeOf: 'High-density polyethylene, a more crystalline ethylene-based plastic.', usedFor: 'Moisture-barrier layers, rigid bottles, caps, and mono-PE pouch structures.' },
  bopp: { madeOf: 'Biaxially oriented polypropylene, stretched in two directions for stiffness and clarity.', usedFor: 'Snack wrappers, labels, overwraps, and printable outer layers.' },
  pet: { madeOf: 'Polyethylene terephthalate, a strong polyester made from terephthalic acid and ethylene glycol.', usedFor: 'Print webs, high-clarity pouches, trays, and laminates.' },
  pa: { madeOf: 'Polyamide (nylon), an engineering polymer with strong hydrogen-bonded chains.', usedFor: 'Puncture-resistant vacuum pouches, meat and cheese packs, and retort laminates.' },
  evoh: { madeOf: 'Ethylene vinyl alcohol copolymer, a specialty copolymer barrier resin.', usedFor: 'Thin oxygen-barrier layers inside recyclable-ready multi-layer PE packs.' },
  met_pet: { madeOf: 'PET film coated with a very thin vacuum-deposited aluminium layer.', usedFor: 'Light-barrier snack, coffee, confectionery, and dry-food pouches.' },
  al_foil: { madeOf: 'Rolled aluminium metal foil, usually protected by polymer seal and print layers.', usedFor: 'Ultra-barrier coffee, dairy powder, pharmaceutical, and retort laminates.' },
  pla: { madeOf: 'Polylactic acid, a bio-based polyester commonly made from fermented plant sugars.', usedFor: 'Compostable produce films, clear trays, and short-life food-service packs.' },
};

function enrichMaterial(material) {
  return { ...material, ...(materialDetails[material.code] || { madeOf: 'Supplier-specific polymer construction.', usedFor: 'Flexible food-packaging applications.' }) };
}

function setRangeFill(input) {
  const pct = ((Number(input.value) - Number(input.min)) / (Number(input.max) - Number(input.min))) * 100;
  input.style.background = `linear-gradient(90deg, #0d7169 0%, #0d7169 ${pct}%, #dcebe0 ${pct}%, #dcebe0 100%)`;
}

function updateOutputs() {
  $('#moisture-value').textContent = `${$('#moisture').value}%`;
  $('#fat-value').textContent = `${$('#fat').value}%`;
  $('#ph-value').textContent = $('#ph').value;
  ['#moisture', '#fat', '#ph'].forEach((id) => setRangeFill($(id)));
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}

function formatNumber(value, digits = 0) {
  return Number(value).toLocaleString(undefined, { maximumFractionDigits: digits });
}

function getHistory() {
  try {
    const records = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    return Array.isArray(records) ? records : [];
  } catch (error) {
    return [];
  }
}

function setHistory(records) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(records.slice(0, 25)));
}

function shortStrategy(value) {
  return String(value || 'balanced').replaceAll('_', ' ').replace(/\b\w/g, character => character.toUpperCase());
}

function recordRecommendation(view) {
  const commodity = $('#commodity').selectedOptions[0].textContent;
  const record = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    commodity,
    structure: view.structure,
    fit: view.fit,
    eco: view.eco,
    shelfLife: view.life,
    strategy: view.tags?.[0] || 'balanced',
    createdAt: new Date().toISOString(),
    view,
  };
  const records = getHistory();
  records.unshift(record);
  setHistory(records);
  currentRecommendation = record;
  renderHistory();
  renderReports();
}

function dateLabel(value) {
  return new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit' }).format(new Date(value));
}

function renderHistory() {
  const records = getHistory();
  const total = records.length;
  const averageEco = total ? Math.round(records.reduce((sum, item) => sum + Number(item.eco || 0), 0) / total) : '—';
  $('#history-total').textContent = total;
  $('#history-circular').textContent = total ? `${averageEco}/100` : '—';
  $('#history-count-label').textContent = `${total} ${total === 1 ? 'record' : 'records'}`;
  $('#history-empty').hidden = total > 0;
  $('#history-list').innerHTML = records.map((item, index) => `
    <article class="history-row">
      <div class="history-number">${String(index + 1).padStart(2, '0')}</div>
      <div class="history-main"><strong>${escapeHtml(item.commodity)}</strong><span>${escapeHtml(item.structure)}</span></div>
      <div class="history-meta"><span>${shortStrategy(item.strategy)}</span><small>${dateLabel(item.createdAt)}</small></div>
      <button class="row-action" data-load-history="${item.id}">View <span>→</span></button>
    </article>`).join('');
}

function renderReports() {
  const records = getHistory();
  const total = records.length;
  const bestFit = total ? Math.max(...records.map(item => Number(item.fit || 0))) : '—';
  const avgEco = total ? Math.round(records.reduce((sum, item) => sum + Number(item.eco || 0), 0) / total) : '—';
  const frequencies = records.reduce((all, item) => ({ ...all, [item.strategy]: (all[item.strategy] || 0) + 1 }), {});
  const preferred = total ? Object.entries(frequencies).sort((a, b) => b[1] - a[1])[0][0] : '—';
  $('#report-ready-count').textContent = total;
  $('#report-best-fit').textContent = total ? `${bestFit}%` : '—';
  $('#report-eco').textContent = total ? `${avgEco}/100` : '—';
  $('#report-strategy').textContent = total ? shortStrategy(preferred) : '—';
  $('#report-hero-title').textContent = total ? `${total} blueprint${total === 1 ? '' : 's'} ready to compare` : 'Ready for your first analysis';
  $('#report-hero-text').textContent = total ? `Your portfolio’s top material match is ${bestFit}%. Use the register below to compare protection, circularity, and shelf-life decisions.` : 'Generate recommendations to see fit-score trends, circularity signals, and product-level material decisions here.';
  $('#report-table').innerHTML = total ? `
    <div class="report-table-head"><span>Commodity</span><span>Primary structure</span><span>Fit</span><span>Estimated life</span></div>
    ${records.map(item => `<div class="report-table-row"><strong>${escapeHtml(item.commodity)}</strong><span>${escapeHtml(item.structure)}</span><b>${item.fit}%</b><span>${escapeHtml(item.shelfLife)}</span></div>`).join('')}` : `<div class="report-empty"><span>◌</span><p>No records in the register yet. Your completed recommendations will be collected here automatically.</p></div>`;
}

function renderMaterials() {
  const query = $('#material-search').value.trim().toLowerCase();
  const visibleMaterials = materialCatalog.filter(material => {
    const matchesText = !query || [material.name, material.code, material.madeOf, material.usedFor, material.recyclable ? 'recyclable' : '', material.heat_sealable ? 'heat sealable' : '', material.freezer_safe ? 'freezer safe' : ''].join(' ').toLowerCase().includes(query);
    const matchesFilter = activeMaterialFilter === 'all' || (activeMaterialFilter === 'recyclable' && material.recyclable) || (activeMaterialFilter === 'sealable' && material.heat_sealable) || (activeMaterialFilter === 'freezer' && material.freezer_safe);
    return matchesText && matchesFilter;
  });
  $('#material-count').textContent = materialCatalog.length;
  $('#material-grid').innerHTML = visibleMaterials.length ? visibleMaterials.map(material => {
    const barrier = material.otr_at_25um_cc_m2_day < 20 ? 'High barrier' : material.otr_at_25um_cc_m2_day < 1000 ? 'Medium barrier' : 'Breathable';
    return `<article class="material-card"><div class="material-card-top"><span class="material-code">${escapeHtml(material.code)}</span><span class="material-barrier">${barrier}</span></div><h3>${escapeHtml(material.name)}</h3><div class="material-explainer"><p><span>MADE OF</span>${escapeHtml(material.madeOf)}</p><p><span>USED FOR</span>${escapeHtml(material.usedFor)}</p></div><div class="material-specs"><div><span>OTR</span><strong>${formatNumber(material.otr_at_25um_cc_m2_day, material.otr_at_25um_cc_m2_day < 10 ? 2 : 0)}</strong><small>cc/m²·day</small></div><div><span>WVTR</span><strong>${formatNumber(material.wvtr_at_25um_g_m2_day, material.wvtr_at_25um_g_m2_day < 10 ? 1 : 0)}</strong><small>g/m²·day</small></div></div><div class="material-footer"><span class="material-score"><i style="width:${material.sustainability_screening_score}%"></i></span><b>${material.sustainability_screening_score}/100</b></div><div class="material-tags"><span class="${material.recyclable ? 'tag-positive' : ''}">${material.recyclable ? 'Recyclable' : 'Special stream'}</span><span>${material.heat_sealable ? 'Heat-sealable' : 'Seal layer needed'}</span></div></article>`;
  }).join('') : `<div class="no-materials"><span>⌕</span><p>No material matches this filter.</p><button class="text-button" id="reset-material-filter">Clear filters</button></div>`;
}

async function loadMaterialLibrary() {
  try {
    const response = await fetch('/api/v1/materials');
    if (!response.ok) throw new Error('Material catalogue unavailable');
    materialCatalog = (await response.json()).map(enrichMaterial);
  } catch (error) {
    materialCatalog = fallbackMaterials.map(enrichMaterial);
  }
  renderMaterials();
}

function showView(view) {
  const target = $(`#${view}`);
  if (!target) return;
  $$('.app-view').forEach(section => { section.hidden = section !== target; section.classList.toggle('is-active', section === target); });
  $$('.side-nav [data-view]').forEach(link => link.classList.toggle('active', link.dataset.view === view));
  if (view === 'history') renderHistory();
  if (view === 'reports') renderReports();
  if (view === 'materials') renderMaterials();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function downloadCsv() {
  const records = getHistory();
  if (!records.length) return showToast('Generate a recommendation before exporting a report');
  const rows = [['Commodity', 'Primary structure', 'Fit score', 'Circularity', 'Estimated shelf life', 'Strategy', 'Created at'], ...records.map(item => [item.commodity, item.structure, `${item.fit}%`, `${item.eco}/100`, item.shelfLife, shortStrategy(item.strategy), dateLabel(item.createdAt)])];
  const csv = rows.map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(',')).join('\n');
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  const anchor = document.createElement('a');
  anchor.href = url; anchor.download = 'pacitguide-recommendation-report.csv'; anchor.click();
  URL.revokeObjectURL(url);
  showToast('Report CSV downloaded');
}

function fillProduct(key) {
  const product = products[key];
  $('#moisture').value = product.moisture;
  $('#fat').value = product.fat;
  $('#ph').value = product.ph;
  $('#storage').value = product.storage;
  $('#temperature').value = product.temperature;
  $('#humidity').value = product.humidity;
  $('#shelf-life').value = product.life;
  $('#respiration').value = product.respiration;
  $('#food-type').textContent = product.type;
  $('#food-note').textContent = product.note;
  $('#food-description').textContent = product.description;
  $('#food-art').className = 'food-art food-icon';
  $('#food-art').textContent = product.icon;
  $('#respiration-field').style.opacity = product.fresh ? '1' : '.57';
  updateOutputs();
}

function deriveCustom(base, key) {
  const moisture = Number($('#moisture').value);
  const fat = Number($('#fat').value);
  const storage = $('#storage').value;
  const shelfLife = Number($('#shelf-life').value);
  const fresh = $('#respiration').value !== 'none';
  const priorities = $$('.priority-option input:checked').map(input => input.value);
  const custom = JSON.parse(JSON.stringify(base));
  if (fresh) {
    custom.structure = 'Micro-perforated LDPE / BOPP produce pouch';
    custom.description = 'A breathable construction selected for the product’s respiration requirement. Confirm gas equilibrium in a pack trial.';
    custom.otr = $('#respiration').value === 'high' ? '12,000–20,000' : '6,000–12,000';
    custom.wvtr = '8–14'; custom.thickness = '35–50'; custom.life = `${Math.max(3, shelfLife - 2)}–${shelfLife + 2}`;
    custom.reason = 'respiration control & freshness'; custom.tags = ['Fresh product', 'Breathable', 'MAP assessment']; custom.fit = 86;
  } else if (fat > 18 || moisture < 8) {
    custom.structure = 'Metallized BOPP / PE barrier pouch';
    custom.description = 'A high-barrier construction to protect dry or fat-rich foods from humidity, oxygen, and rancidity.';
    custom.otr = fat > 18 ? '< 20' : '< 100'; custom.wvtr = '< 1.5'; custom.thickness = '50–70'; custom.life = `${Math.max(20, shelfLife - 10)}–${shelfLife + 15}`;
    custom.reason = 'oxidation & moisture protection'; custom.tags = ['High barrier', 'Dry food', 'Nitrogen flush ready']; custom.fit = 89;
  } else if (storage === 'frozen') {
    custom.structure = 'Co-extruded PE freezer-grade pouch'; custom.description = 'A low-temperature tough pouch designed to limit freezer burn and resist cracking in frozen distribution.';
    custom.otr = '< 150'; custom.wvtr = '< 2.5'; custom.thickness = '70–90'; custom.life = `${Math.max(60, shelfLife - 30)}–${shelfLife + 30}`; custom.reason = 'freezer durability & moisture barrier'; custom.tags = ['Frozen', 'Low-temperature seal', 'PE recyclable']; custom.fit = 88;
  }
  if (priorities.includes('sustainable')) { custom.eco = Math.min(90, custom.eco + 12); custom.recycle += 14; custom.structure = custom.structure.replace('Metallized BOPP / PE', 'EVOH mono-PE'); custom.tags.push('Circularity preferred'); }
  if (priorities.includes('cost')) { custom.cost = Math.max(25, custom.cost - 12); custom.costLabel = 'Low'; }
  if (selectedTransport === 'rough') { custom.thickness = custom.thickness.replace(/(\d+)–(\d+)/, (_, a, b) => `${Number(a) + 10}–${Number(b) + 10}`); custom.thicknessCaption = 'Reinforced for distribution'; }
  custom.confidence = Math.min(94, custom.fit - 4 + (key === 'custom' ? 0 : 2));
  return custom;
}

function setMeter(selector, value) { $(selector).style.width = `${Math.max(7, Math.min(100, value))}%`; }

function renderResult(data) {
  $('#structure-name').textContent = data.structure;
  $('#structure-description').textContent = data.description;
  $('#recommendation-why').textContent = data.why || `This structure is selected because it best addresses ${data.reason} for the chosen food profile, storage conditions, and shelf-life target.`;
  $('#recommendation-does').textContent = data.does || data.description;
  $('#result-tags').innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join('');
  $('#otr-result').textContent = data.otr; $('#otr-caption').textContent = data.otrCaption;
  $('#wvtr-result').textContent = data.wvtr; $('#wvtr-caption').textContent = data.wvtrCaption;
  $('#thickness-result').textContent = data.thickness; $('#thickness-caption').textContent = data.thicknessCaption;
  $('#life-result').textContent = data.life; $('#life-caption').textContent = data.lifeCaption;
  $('#map-text').textContent = data.map;
  $('#gas-composition').innerHTML = [['O₂', data.gas[0]], ['CO₂', data.gas[1]], ['N₂', data.gas[2]]].map(([gas, amount]) => `<div><span>${gas}</span><strong>${amount}</strong></div>`).join('');
  $('#eco-score').textContent = data.eco; setMeter('#recycle-meter', data.recycle); setMeter('#efficiency-meter', data.efficiency); setMeter('#cost-meter', data.cost);
  $('#recycle-value').textContent = data.recycleLabel; $('#efficiency-value').textContent = data.efficiencyLabel; $('#cost-value').textContent = data.costLabel;
  $('#alternative-cards').innerHTML = data.alt.map((alternative, index) => `<article class="alternative-card"><span class="alternative-symbol">${index ? '◈' : '◇'}</span><span><strong>${alternative[0]}</strong><small>${alternative[1]}</small></span><span class="alternative-score">${alternative[2]}% fit</span></article>`).join('');
}

function toApiPayload() {
  const priorities = $$('.priority-option input:checked').map(input => input.value);
  let priority = 'balanced';
  if (priorities.includes('cost')) priority = 'cost';
  else if (priorities.includes('sustainable')) priority = 'eco';
  else if (priorities.includes('shelf')) priority = 'shelf_life';
  return {
    commodity: $('#commodity').selectedOptions[0].textContent,
    moisture_content_percent: Number($('#moisture').value),
    oil_fat_content_percent: Number($('#fat').value),
    ph: Number($('#ph').value),
    respiration_rate: $('#respiration').value,
    desired_shelf_life_days: Number($('#shelf-life').value),
    storage_temperature_c: Number($('#temperature').value),
    relative_humidity_percent: Number($('#humidity').value),
    transportation: selectedTransport,
    storage_type: $('#storage').value,
    priority,
  };
}

function labelCost(costIndex) {
  if (costIndex <= 3) return 'Low';
  if (costIndex <= 5) return 'Medium';
  return 'High';
}

function apiResultToView(response) {
  const option = response.primary;
  const requirements = response.requirements;
  const gas = requirements.target_map_gas || { O2: 'N/A', CO2: 'N/A', N2: 'N/A' };
  const range = response.estimated_shelf_life_days;
  const thicknessRange = requirements.target_thickness_microns;
  return {
    structure: option.structure,
    description: option.rationale.join(' '),
    otr: option.actual_otr_cc_m2_day < 1 ? '< 1' : option.actual_otr_cc_m2_day.toLocaleString(undefined, { maximumFractionDigits: 0 }),
    otrCaption: `Target ${requirements.target_otr_cc_m2_day ? `≈ ${requirements.target_otr_cc_m2_day.toLocaleString()} cc/m²·day` : 'set by product'}`,
    wvtr: option.actual_wvtr_g_m2_day < .1 ? '< 0.1' : option.actual_wvtr_g_m2_day.toFixed(1),
    wvtrCaption: `Target ≤ ${requirements.max_wvtr_g_m2_day} g/m²·day`,
    thickness: `${thicknessRange[0]}–${thicknessRange[1]}`,
    thicknessCaption: `${option.thickness_microns} µm candidate · ${option.mechanical_strength} strength`,
    life: `${range[0]}–${range[1]}`,
    lifeCaption: 'Estimated from selected conditions',
    fit: option.match_score,
    confidence: Math.max(65, Math.min(97, option.match_score + 4)),
    eco: option.sustainability_score,
    reason: requirements.map_suitable ? 'barrier, gas exchange & protection' : 'barrier, shelf life & protection',
    tags: [option.strategy.replace('_', ' '), option.recyclability + ' recyclability', requirements.map_suitable ? 'MAP assessment' : 'No MAP needed'],
    map: requirements.map_suitable ? 'Use the target gas guidance as a starting point, then validate O₂/CO₂ equilibrium and seal integrity with a pack trial.' : 'MAP is not required for this food profile. Focus on the barrier, seal, and storage controls shown above.',
    gas: [gas.O2, gas.CO2, gas.N2],
    recycle: option.recyclability === 'high' ? 90 : option.recyclability === 'good' ? 73 : 40,
    efficiency: Math.min(95, Math.round(100 - option.cost_index * 7)),
    cost: Math.max(18, Math.round(option.cost_index * 11)),
    recycleLabel: option.recyclability[0].toUpperCase() + option.recyclability.slice(1),
    efficiencyLabel: option.thickness_microns <= thicknessRange[1] ? 'Good' : 'Medium',
    costLabel: labelCost(option.cost_index),
    alt: response.alternatives.map(alternative => [alternative.structure, alternative.rationale[0], alternative.match_score]),
  };
}

async function getApiRecommendation() {
  const response = await fetch('/api/v1/recommend', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(toApiPayload()),
  });
  if (!response.ok) throw new Error('Recommendation service unavailable');
  return apiResultToView(await response.json());
}

async function submitRecommendation(event) {
  event.preventDefault();
  const key = $('#commodity').value;
  const product = products[key];
  const button = $('.analyze-button');
  const originalLabel = button.innerHTML;
  button.disabled = true;
  button.innerHTML = 'Calculating package fit…';
  let data;
  try {
    data = await getApiRecommendation();
    showToast('Recommendation calculated by the PacitGuide engine');
  } catch (error) {
    // The standalone HTML still works when opened without the local API server.
    data = deriveCustom(product.result, key);
    showToast('Showing offline decision-support recommendation');
  } finally {
    button.disabled = false;
    button.innerHTML = originalLabel;
  }
  renderResult(data);
  recordRecommendation(data);
  const results = $('#results');
  results.classList.remove('hidden');
  setTimeout(() => results.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30);
}

function resetForm() {
  $('#commodity').value = 'tomato';
  fillProduct('tomato');
  selectedTransport = 'stable';
  $$('.segmented button').forEach(button => button.classList.toggle('selected', button.dataset.transport === 'stable'));
  $$('.priority-option input').forEach(input => { input.checked = input.value === 'shelf'; input.closest('.priority-option').classList.toggle('checked', input.checked); });
  $('#results').classList.add('hidden');
  showToast('Fields reset to fresh tomato profile');
}

$('#commodity').addEventListener('change', event => fillProduct(event.target.value));
['#moisture', '#fat', '#ph'].forEach(selector => $(selector).addEventListener('input', updateOutputs));
$$('.priority-option input').forEach(input => input.addEventListener('change', () => input.closest('.priority-option').classList.toggle('checked', input.checked)));
$$('.segmented button').forEach(button => button.addEventListener('click', () => { selectedTransport = button.dataset.transport; $$('.segmented button').forEach(item => item.classList.toggle('selected', item === button)); }));
$('#packaging-form').addEventListener('submit', submitRecommendation);
$('#reset-button').addEventListener('click', resetForm);
$('#new-analysis-button').addEventListener('click', () => { $('#results').classList.add('hidden'); $('#recommend').scrollIntoView({ behavior: 'smooth' }); });
$('#save-button').addEventListener('click', () => {
  if (currentRecommendation) showToast('This recommendation is already saved in local history');
  else showToast('Generate a recommendation to save it');
});
$('#print-button').addEventListener('click', () => window.print());

$$('.side-nav [data-view]').forEach(link => link.addEventListener('click', event => { event.preventDefault(); showView(link.dataset.view); }));
$$('[data-view-target]').forEach(button => button.addEventListener('click', () => showView(button.dataset.viewTarget)));
$('#material-search').addEventListener('input', renderMaterials);
$$('[data-material-filter]').forEach(button => button.addEventListener('click', () => {
  activeMaterialFilter = button.dataset.materialFilter;
  $$('[data-material-filter]').forEach(item => item.classList.toggle('selected', item === button));
  renderMaterials();
}));
$('#material-grid').addEventListener('click', event => {
  if (event.target.id === 'reset-material-filter') {
    activeMaterialFilter = 'all';
    $('#material-search').value = '';
    $$('[data-material-filter]').forEach(item => item.classList.toggle('selected', item.dataset.materialFilter === 'all'));
    renderMaterials();
  }
});
$('#history-list').addEventListener('click', event => {
  const button = event.target.closest('[data-load-history]');
  if (!button) return;
  const record = getHistory().find(item => item.id === button.dataset.loadHistory);
  if (!record?.view) return;
  currentRecommendation = record;
  renderResult(record.view);
  $('#results').classList.remove('hidden');
  showView('recommend');
  setTimeout(() => $('#results').scrollIntoView({ behavior: 'smooth', block: 'start' }), 40);
});
$('#clear-history-button').addEventListener('click', () => {
  localStorage.removeItem(HISTORY_KEY);
  currentRecommendation = null;
  renderHistory();
  renderReports();
  showToast('Local recommendation history cleared');
});
$('#download-csv-button').addEventListener('click', downloadCsv);
$('#print-report-button').addEventListener('click', () => window.print());
fillProduct('tomato');
renderHistory();
renderReports();
loadMaterialLibrary();
