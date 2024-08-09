# Welcome to your GPT Engineer project

## Project info

**Project**: weaponary-analysis-hub 

**URL**: https://run.gptengineer.app/projects/f4f49472-5e58-4fb2-977b-15ec632b9234/improve

**Description**: I want an application which will allow me to load postgres data with the following db table and columns: public.equippedweaponswithgradesorreviews
    weapon_id text COLLATE pg_catalog."default" NOT NULL,
    name text COLLATE pg_catalog."default",
    hash text COLLATE pg_catalog."default",
    tag text COLLATE pg_catalog."default",
    tier text COLLATE pg_catalog."default",
    type text COLLATE pg_catalog."default",
    source text COLLATE pg_catalog."default",
    category text COLLATE pg_catalog."default",
    element text COLLATE pg_catalog."default",
    power text COLLATE pg_catalog."default",
    masterwork_type text COLLATE pg_catalog."default",
    masterwork_tier text COLLATE pg_catalog."default",
    owner text COLLATE pg_catalog."default",
    locked text COLLATE pg_catalog."default",
    equipped text COLLATE pg_catalog."default",
    year text COLLATE pg_catalog."default",
    season text COLLATE pg_catalog."default",
    event text COLLATE pg_catalog."default",
    crafted text COLLATE pg_catalog."default",
    crafted_level text COLLATE pg_catalog."default",
    kill_tracker text COLLATE pg_catalog."default",
    foundry text COLLATE pg_catalog."default",
    loadouts text COLLATE pg_catalog."default",
    notes text COLLATE pg_catalog."default",
    perk_overall text COLLATE pg_catalog."default",
    perk_individual_perks text COLLATE pg_catalog."default",
    perk_trait_combo text COLLATE pg_catalog."default",
    perk_best_available_rank text COLLATE pg_catalog."default",
    review_overall numeric,
    review_pve numeric,
    review_pvp numeric,
    stat_blast_radius text COLLATE pg_catalog."default",
    stat_velocity text COLLATE pg_catalog."default",
    stat_range text COLLATE pg_catalog."default",
    stat_damage_falloff text COLLATE pg_catalog."default",
    stat_stability text COLLATE pg_catalog."default",
    stat_handling text COLLATE pg_catalog."default",
    stat_reload_speed text COLLATE pg_catalog."default",
    stat_reload_time text COLLATE pg_catalog."default",
    stat_zoom text COLLATE pg_catalog."default",
    stat_ammo_reserves text COLLATE pg_catalog."default",
    stat_aim_assistance text COLLATE pg_catalog."default",
    stat_airborne_effectiveness text COLLATE pg_catalog."default",
    stat_recoil_direction text COLLATE pg_catalog."default",
    stat_rounds_per_minute text COLLATE pg_catalog."default",
    stat_magazine text COLLATE pg_catalog."default",
    perk_masterwork_bonus text COLLATE pg_catalog."default",
    stat_swing_speed text COLLATE pg_catalog."default",
    stat_impact text COLLATE pg_catalog."default",
    stat_guard_efficiency text COLLATE pg_catalog."default",
    stat_guard_resistance text COLLATE pg_catalog."default",
    stat_guard_endurance text COLLATE pg_catalog."default",
    stat_charge_rate text COLLATE pg_catalog."default",
    stat_charge_time text COLLATE pg_catalog."default",
    stat_ammo_capacity text COLLATE pg_catalog."default",
    stat_accuracy text COLLATE pg_catalog."default",
    stat_draw_time text COLLATE pg_catalog."default",
    stat_shield_duration text COLLATE pg_catalog."default",
    perks_0 text COLLATE pg_catalog."default",
    perks_1 text COLLATE pg_catalog."default",
    perks_2 text COLLATE pg_catalog."default",
    perks_3 text COLLATE pg_catalog."default",
    perks_4 text COLLATE pg_catalog."default",
    perks_5 text COLLATE pg_catalog."default",
    perks_6 text COLLATE pg_catalog."default",
    perks_7 text COLLATE pg_catalog."default",
    perks_8 text COLLATE pg_catalog."default",
    perks_9 text COLLATE pg_catalog."default",
    perks_10 text COLLATE pg_catalog."default",
    perks_11 text COLLATE pg_catalog."default",
    perks_12 text COLLATE pg_catalog."default",
    perks_13 text COLLATE pg_catalog."default",
    perks_14 text COLLATE pg_catalog."default" and Consider the desired features for the web application:
   - In database.py, create functions to:
     - Establish a connection to the PostgreSQL database using the provided credentials
     - Implement queries for each of the analysis features listed in the desired_features
   - In models.py, create a Weapon class that represents the table schema
   - In routes.py, create routes for:
     - Home page (overall statistics)
     - Weapon category analysis
     - Perk analysis
     - Stat-based insights
     - Comparison tools 

## Who is the owner of this repository?
By default, GPT Engineer projects are created with public GitHub repositories.

However, you can easily transfer the repository to your own GitHub account by navigating to your [GPT Engineer project](https://run.gptengineer.app/projects/f4f49472-5e58-4fb2-977b-15ec632b9234/improve) and selecting Settings -> GitHub. 

## How can I edit this code?
There are several ways of editing your application.

**Use GPT Engineer**

Simply visit the GPT Engineer project at [GPT Engineer](https://run.gptengineer.app/projects/f4f49472-5e58-4fb2-977b-15ec632b9234/improve) and start prompting.

Changes made via gptengineer.app will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in the GPT Engineer UI.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps: 

```sh
git clone https://github.com/GPT-Engineer-App/weaponary-analysis-hub.git
cd weaponary-analysis-hub
npm i

# This will run a dev server with auto reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

All GPT Engineer projects can be deployed directly via the GPT Engineer app. 

Simply visit your project at [GPT Engineer](https://run.gptengineer.app/projects/f4f49472-5e58-4fb2-977b-15ec632b9234/improve) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain, then we recommend GitHub Pages.

To use GitHub Pages you will need to follow these steps: 
- Deploy your project using GitHub Pages - instructions [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site)
- Configure a custom domain for your GitHub Pages site - instructions [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)