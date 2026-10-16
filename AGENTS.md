<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

- Keep the uploaded original under `kriora/`, including its unchanged index.html; the supported running app uses TanStack leaf routes and shared original views under `src/site` to preserve presentation and direct links.
- Serve original media through asset pointer imports and retain the original palette through semantic CSS tokens, so migration does not redesign the source website.

- Site images, logo and hero video are real files in src/assets imported directly (bundled by Vite), not CDN pointers, so they work on any host (Netlify, Hostinger).
