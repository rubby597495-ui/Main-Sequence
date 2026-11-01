# Keyword and content map

This is an editorial planning record, not a promise of search volume, ranking
or traffic. No keyword tool with reliable volume/difficulty data was available
for this build, so the map uses observed search intent, SERP composition and
the game's confirmed information architecture. We do not fabricate search
metrics.

## Research problem and disambiguation

The name "Main Sequence" collides with:

- astronomy (main-sequence stars),
- a venture-capital firm (Main Sequence Ventures),
- an unrelated tabletop RPG also called *Main Sequence*.

The game result set is currently led by its official site, Steam, the Steam
demo, Epic Games Store, SteamDB, Mythwright, press coverage and YouTube
gameplay. Searches such as "Main Sequence wiki", "Main Sequence guide" and
"Main Sequence release date" do not surface a dedicated, source-first wiki with
confirmed demo data. That gap is the site's opening.

The site therefore consistently uses game-disambiguating modifiers ("game",
"Steam", "demo", "Early Access") where the query context could be ambiguous. It
does not target the venture firm, astronomy pages or the tabletop RPG.

## Search-intent clusters

### 1. Game identity and news

Queries observed/implied:

- main sequence game
- main sequence steam
- main sequence game overview
- main sequence early access
- main sequence latest update
- main sequence patch notes
- main sequence gameplay

Mapped pages:

- `/` — orientation and launch status
- `/game/` — game overview, setting, features, boundaries
- `/updates/` — official announcement and patch timeline
- `/release-date/` — date, price, platforms, requirements

Reason: high-intent discovery and news queries need a clear answer immediately.
The site avoids a separate thin "what is" page because it would duplicate the
overview.

### 2. Release, availability and compatibility

Queries:

- main sequence release date
- main sequence release time
- main sequence release time zones
- main sequence price
- main sequence platforms
- main sequence system requirements
- main sequence ps5 / xbox
- main sequence game pass
- main sequence steam deck
- main sequence co-op player count

Mapped pages:

- `/release-date/`
- `/tools/launch-timer/`
- `/guides/co-op/`
- `/tools/demo-checklist/`

Notes:

- The exact release date is official; the exact unlock hour is not.
- The site minimises price speculation and labels the SteamDB timestamp as an
  unofficial store listing.
- "Steam Deck" is explicitly unconfirmed rather than turned into a speculative
  page.
- Player cap and dedicated-server pages were merged into the co-op guide
  because they share one answer: not publicly confirmed.

### 3. Demo and early-game help

Queries:

- main sequence demo
- main sequence demo guide
- main sequence demo co-op
- main sequence demo save transfer
- main sequence beginner guide
- main sequence how to start
- main sequence conveyor belts missing
- main sequence how to get conveyor belts
- main sequence logistics 1
- main sequence mining drones
- main sequence research station power
- main sequence tutorial stuck

Mapped pages:

- `/demo/`
- `/beginner-guide/`
- `/guides/first-station-logistics/`
- `/tools/demo-checklist/`
- `/database/research/`

Reason: the community reports show a real early-game blocker: station power and
Logistics I before belts. The dedicated conveyor page answers that query
directly, while the beginner and demo pages give the broader route. These
queries are kept separate because the user intent is different, not because the
site needs more URLs.

### 4. Database and entity queries

Queries:

- main sequence wiki
- main sequence database
- main sequence resources
- main sequence materials
- main sequence items
- main sequence modules
- main sequence ship modules
- main sequence station modules
- main sequence research tree
- main sequence tech tree
- main sequence sciences
- main sequence shield generator
- main sequence mining drone bay

Mapped pages:

- `/database/` — hub and known unknowns
- `/database/resources/` — filterable material index
- `/database/modules/` — filterable system/module index
- `/database/research/` — visible tree, nodes, sciences

Important constraint: the full recipe and stat tables are not public. The
database indexes confirmed existence and context; it does not invent recipes,
damage, power draw or drop rates. There are no individual entity pages yet
because there is not enough verified entity-specific content to make them more
than thin duplicates.

### 5. Systems and strategy

Queries:

- main sequence ship design
- main sequence ship building
- main sequence factory layout
- main sequence production line
- main sequence combat
- main sequence defense
- main sequence shields
- main sequence station turret
- main sequence peaceful mode
- main sequence co-op roles
- main sequence multiplayer

Mapped pages:

- `/guides/factory-layout/`
- `/guides/ship-design/`
- `/guides/combat-defense/`
- `/guides/co-op/`
- `/database/modules/`

Reason: these pages combine confirmed mechanics with explicit unknowns. They
avoid "best build" claims while the balance is still changing.

### 6. Tool and long-tail utility

Queries:

- main sequence countdown
- main sequence release time converter
- main sequence demo checklist
- main sequence co-op planner
- main sequence progress tracker

Mapped pages:

- `/tools/`
- `/tools/launch-timer/`
- `/tools/demo-checklist/`
- `/guides/co-op/#crew-planner`

These tools have real functions: countdown, time-zone conversion, local
progress persistence, category/search filtering and crew role assignment.
They do not invent a production calculator from unpublished recipes.

## Pages deliberately not created

| Candidate | Why it is not a page yet |
| --- | --- |
| Characters | No verified named character roster. |
| Monsters/bestiary | Only two enemy names are supported by accessible sources; no stat data. |
| Weapons list | Weapon modules exist, but no reliable stat data; covered in modules/ship guide. |
| Armor/equipment | The game uses ship modules and upgrades, not a traditional armor catalog. |
| Quests/missions | Mission objectives exist in the demo, but a full quest database is not public. |
| Locations/maps | Procedural systems and no stable named map set. |
| Item recipe calculator | Recipe ratios and times are incomplete and changing. |
| "Best ship/build" pages | Balance is not stable; would be fabricated authority. |
| Price prediction | No official price; would be speculation. |
| "Is it worth it?" review | The game has not launched; no first-hand review basis. |

## Internal-link clusters

- Home → launch status, demo, beginner, guides hub, database hub, tools, updates.
- Beginner → demo, conveyor fix, factory layout, research tree, module database.
- Conveyor fix → research tree, beginner, demo, modules.
- Co-op → demo, crew planner, modules, launch status.
- Ship design → modules, combat, factory layout.
- Combat → modules, ship design, research, beginner.
- Database rows → relevant guide pages and source archive.
- Update entries → affected guide/database/tool plus the source note.
- Every content page → source list, editorial policy, correction contact.

## Launch update plan

Once Early Access is available and verified:

1. Re-check price, unlock time, requirements, save transfer and co-op cap.
2. Replace demo-only labels with launch-build labels for verified mechanics.
3. Add recipe/module stats only from the current build, with version dates.
4. Re-run sitemap/index checks in Search Console and Bing.
5. Expand entity pages only when each page can answer a distinct verified query.
6. Review actual query and click data rather than assuming demand from the
   planned keyword list.
