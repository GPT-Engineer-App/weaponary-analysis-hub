export class Weapon {
  constructor(data) {
    this.weapon_id = data.weapon_id;
    this.name = data.name;
    this.hash = data.hash;
    this.tag = data.tag;
    this.tier = data.tier;
    this.type = data.type;
    this.source = data.source;
    this.category = data.category;
    this.element = data.element;
    this.power = data.power;
    this.masterwork_type = data.masterwork_type;
    this.masterwork_tier = data.masterwork_tier;
    this.owner = data.owner;
    this.locked = data.locked;
    this.equipped = data.equipped;
    this.year = data.year;
    this.season = data.season;
    this.event = data.event;
    this.crafted = data.crafted;
    this.crafted_level = data.crafted_level;
    this.kill_tracker = data.kill_tracker;
    this.foundry = data.foundry;
    this.loadouts = data.loadouts;
    this.notes = data.notes;
    this.perk_overall = data.perk_overall;
    this.perk_individual_perks = data.perk_individual_perks;
    this.perk_trait_combo = data.perk_trait_combo;
    this.perk_best_available_rank = data.perk_best_available_rank;
    this.review_overall = data.review_overall;
    this.review_pve = data.review_pve;
    this.review_pvp = data.review_pvp;
    this.stat_blast_radius = data.stat_blast_radius;
    this.stat_velocity = data.stat_velocity;
    this.stat_range = data.stat_range;
    this.stat_damage_falloff = data.stat_damage_falloff;
    this.stat_stability = data.stat_stability;
    this.stat_handling = data.stat_handling;
    this.stat_reload_speed = data.stat_reload_speed;
    this.stat_reload_time = data.stat_reload_time;
    this.stat_zoom = data.stat_zoom;
    this.stat_ammo_reserves = data.stat_ammo_reserves;
    this.stat_aim_assistance = data.stat_aim_assistance;
    this.stat_airborne_effectiveness = data.stat_airborne_effectiveness;
    this.stat_recoil_direction = data.stat_recoil_direction;
    this.stat_rounds_per_minute = data.stat_rounds_per_minute;
    this.stat_magazine = data.stat_magazine;
    this.perk_masterwork_bonus = data.perk_masterwork_bonus;
    this.stat_swing_speed = data.stat_swing_speed;
    this.stat_impact = data.stat_impact;
    this.stat_guard_efficiency = data.stat_guard_efficiency;
    this.stat_guard_resistance = data.stat_guard_resistance;
    this.stat_guard_endurance = data.stat_guard_endurance;
    this.stat_charge_rate = data.stat_charge_rate;
    this.stat_charge_time = data.stat_charge_time;
    this.stat_ammo_capacity = data.stat_ammo_capacity;
    this.stat_accuracy = data.stat_accuracy;
    this.stat_draw_time = data.stat_draw_time;
    this.stat_shield_duration = data.stat_shield_duration;
    this.perks = [
      data.perks_0, data.perks_1, data.perks_2, data.perks_3, data.perks_4,
      data.perks_5, data.perks_6, data.perks_7, data.perks_8, data.perks_9,
      data.perks_10, data.perks_11, data.perks_12, data.perks_13, data.perks_14
    ].filter(Boolean);
  }
}
