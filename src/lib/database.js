import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

export const getWeapons = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM public.equippedweaponswithgradesorreviews');
    return result.rows;
  } finally {
    client.release();
  }
};

export const getWeaponsByCategory = async (category) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM public.equippedweaponswithgradesorreviews WHERE category = $1', [category]);
    return result.rows;
  } finally {
    client.release();
  }
};

export const getPerkAnalysis = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT perk_overall, COUNT(*) as count FROM public.equippedweaponswithgradesorreviews GROUP BY perk_overall ORDER BY count DESC');
    return result.rows;
  } finally {
    client.release();
  }
};

export const getStatBasedInsights = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT AVG(CAST(stat_impact AS INTEGER)) as avg_impact, AVG(CAST(stat_range AS INTEGER)) as avg_range, AVG(CAST(stat_stability AS INTEGER)) as avg_stability FROM public.equippedweaponswithgradesorreviews');
    return result.rows[0];
  } finally {
    client.release();
  }
};

export const getWeaponComparison = async (weaponId1, weaponId2) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM public.equippedweaponswithgradesorreviews WHERE weapon_id IN ($1, $2)', [weaponId1, weaponId2]);
    return result.rows;
  } finally {
    client.release();
  }
};
