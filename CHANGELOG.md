# Change Log

## v6.0.0
* Support Adminer version 6.0.1
* Redesign: radius & elevation token system, unified button/link styles, sidebar "chip" rows, rounded table/form/code/SQL editor surfaces
* Sidebar: highlight the currently open table/view
* Lighter heading weight, smoother hover transitions, focus-visible states
* AA contrast fixes: sidebar version label, button hover text, logout hover, SQL editor border
* Removed unused `node-sass` dependency (build already uses Dart Sass)
* Updated dependencies
* [FIX] Sidebar: table name and "select" link were rendered in mirrored order
* [FIX] SQL editor: table styling was clipping the autocomplete suggestion list
* [FIX] SQL/PHP autocomplete: selected option unreadable and listbox height squashed to one row

## v5.1.0
* [FIX] Support Adminer version 5.*

## v5.0.0
* Version strategy is new. Theme version ~ Adminer version.
* Support Adminer v5
* Code refactoring 
* Dependencies update

## v0.3.0
* Dependencies update
* Renamed "sass" command to "build"
* Run the commands with the "npm run"
* SCSS: @mixin defaultStyleBoxShadow 
* Reduced paragraph margin
* SCSS: the headings moved to "_headings.scss"
* Increased table contrast and reduces table head size
* Footer shadow
* Changed sidebar items proportions
* [FIX] Checkbox: symbol left position
* [FIX] Default font properties

## v0.2.0
* [FIX] SQL editor style
* [FIX] New version color

## v0.1.0
* Initial release.