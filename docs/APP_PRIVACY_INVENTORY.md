# Privacy inventory

This is the source for the website privacy policy and for the App Store privacy label and the Play Data safety form. v1 has no accounts, no analytics SDK, and no crash reporting (D-053).

## Stored on the device

SQLite database `saucepot.db`:

| Table | What it holds |
| --- | --- |
| `recipes` | id, title, source URL, source host, image URL, description, servings, total time, ingredients, steps, notes, created and updated times, cook count, last cooked time, sample flag |
| `cooked_events` | id, recipe id, cooked time, sample flag |
| `grocery_items` | id, text, recipe id, checked, position, created time, sample flag |

AsyncStorage keys:

| Key | What it holds |
| --- | --- |
| `settings.v1` | theme, weekly goal, cooking reminder, weekly recap switch, graveyard alerts switch |
| `theme.preference` | legacy theme, copied into `settings.v1` once, then removed |
| `onboarding.v1` | answers, current screen, completion time, first recipe id |
| `cook.session.v1` | the open cook: recipe, step, checked ingredients, timer ends. Dropped after 12 hours |
| `share.pending` | a share that arrived before the gate. Dropped after 24 hours |
| `recap.showNames` | whether the weekly recap card shows recipe titles |
| `app.lastOpenedAt` | last open time, for the 15-day comeback line |
| `gus.firstCookShown` | whether the first-cook sheet has been shown. The key name is kept from the Gus era on purpose; do not rename (stored on devices). |
| `dev.simulator` | developer situation switches. Dev builds only |

The iOS widget timeline is in the App Group `group.com.evtsoy.saucepot` (UserDefaults on the device). The share extension uses the same group to hand a URL to the app. Neither is uploaded.

## What leaves the device

| What | To whom | When |
| --- | --- | --- |
| The recipe page the person chose to import | That website | The person taps Import, or a share opens that URL |
| Purchases, the app user id RevenueCat creates, and device and OS details the RevenueCat SDK sends | RevenueCat | Configure, purchase, restore, and entitlement refresh |
| Payment | Apple or Google | The person buys or restores through the store |
| Runtime version and update channel | Expo's update service | An update check. It downloads a JS bundle and does not upload recipes |
| Grocery text or the recap image | Whoever the person picks in the system share sheet | Only after tapping Share |
| Support mail: app version, build, and OS | `saucepot@evtsoy.com` | The person taps Contact support |

Support, Privacy, and Terms open in the browser at the URLs in `src/config/app.ts`.

## What is not collected

- No accounts and no sign-in
- No analytics SDK. `src/lib/analytics.ts` only logs on the device (D-053)
- No crash reporting
- No ads
- No tracking, and no App Tracking Transparency prompt
- No remote push. Every notification is scheduled on the device (D-049)
- Recipe text, grocery items, and onboarding answers are not uploaded

## App Store privacy label this implies

- Data used to track you: none
- Data linked to the user: purchases, through Apple and RevenueCat
- Diagnostics: none collected by Saucepot
- Identifiers: the app user id is created by RevenueCat for purchases. Saucepot does not create an account id
- User content: recipes and the grocery list stay on the device. They are not collected by us
- Do not declare tracking, advertising, or product interaction analytics

Play Data safety should use the same answers (G1).
