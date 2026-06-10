# Miper Portfolio Project - Copy/Paste

Paste each block into the matching field in Upwork's "Add a new portfolio project" form.
No GitHub link, no code (repo stays private). Use a redacted screenshot or text block for "Add content".

---

## Project title (max 70)

Miper: Autonomous Solana Memecoin Trading Bot

---

## Your role (max 100)

Solo developer: architecture, on-chain integration, AI scoring, trading logic

---

## Project description (max 600)

Pick ONE.

--- Version 1 (default; names standard venues, reveals no edge) ---
An autonomous trading bot for Solana memecoins. It listens for new token launches on pump.fun and Raydium, runs on-chain safety checks, then asks an AI model to score each token from 0 to 100. When a score clears the threshold, it auto-buys via Jupiter and manages the position with tiered take-profit and stop-loss. Built in TypeScript with a simulation mode for safe strategy testing, plus copy-trading and DexScreener-based strategies. Focused on low-latency execution and configurable risk controls.

--- Version 2 (more conservative; names less) ---
An autonomous trading bot for Solana tokens. It monitors on-chain activity for new launches, runs automated safety checks, and uses an AI model to evaluate each opportunity before executing trades. Positions are managed automatically with configurable take-profit and stop-loss rules. Built in TypeScript and deployed to a production server, with a simulation mode for safe testing. Runs continuously with low-latency execution and tunable risk controls.

---

## Skills and deliverables (max 5; pick closest dropdown matches)

Solana
Blockchain
TypeScript
API Integration
OpenAI API

---

## Add content (required) - what to use

Goal: prove it's a real, running production system WITHOUT revealing strategy/edge.
Do NOT paste code, the repo link, scoring logic, thresholds, or signal criteria.

Pick ONE of these (both are safe and high-signal):

Option A - Telegram bot screenshot (best):
A screenshot of the bot's Telegram interface (a trade alert / status message).
Blur or crop before posting:
- Token names and contract addresses (these can identify your targets/timing)
- P&L figures and balances
- Any wallet address
- The bot's @username if you don't want it found

Option B - Production server logs (Hetzner):
A screenshot of the bot running live in production. This is a strong "it ships" signal.
Tail the logs, then screenshot. Common commands (use whichever matches your setup):
  journalctl -u miper -n 40       (systemd service)
  pm2 logs miper --lines 40       (pm2)
  tail -n 40 pump.log             (plain log file)
Blur or crop before posting:
- Wallet address and private key (never show)
- RPC URL (it contains an API key)
- Token contract addresses and token names
- Exact trade amounts / balances / P&L
- Server IP, hostname, and any auth tokens
- Anything that reveals scoring values, thresholds, or timing

What's safe to leave visible:
- Generic status lines ("listening for new launches", "running safety checks", "simulation mode")
- Timestamps, uptime, "connected to Solana RPC", "position opened/closed" without the numbers
- That it's clearly a live, long-running process

---

## Prompt for the Claude Code session in ~/projects/miper

Paste this into a Claude Code session opened in the miper directory:

Give me the command to tail the recent production logs on the Hetzner server so I can screenshot a live run for my Upwork portfolio. Then list exactly which fields to blur before I post it: wallet address, private key, RPC URL, token names/addresses, amounts/balances, server IP/hostname, and anything revealing scoring values, thresholds, or timing.
