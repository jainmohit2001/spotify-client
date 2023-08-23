# Spotify Client

This project is part of John Crickett's Coding challenges.

https://codingchallenges.fyi/challenges/challenge-spotify

This is a simple Spotify client that uses the Spotify API to show profile, list playlists and a simple web player to play songs.

## Table of Contents

- [TechStack](#techstack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Starting the server](#starting-the-server)
- [Building the project](#building-the-project)
- [Extra commands](#extra-commands)

## TechStack

- [Create React App](https://create-react-app.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [MUI](https://mui.com/)
- [React Router](https://reactrouter.com/en/main)
- [Spotify Typescript SDK](https://developer.spotify.com/blog/2023-07-03-typescript-sdk)
- [Spotify Web Playback SDK](https://developer.spotify.com/documentation/web-playback-sdk)

## Installation

```bash
# Install dependencies
npm ci
```

## Configuration

Create a `.env.local` file in the root of the project and add the following variables:

```bash
REACT_APP_SPOTIFY_CLIENT_ID=''
REACT_APP_SPOTIFY_REDIRECT_URI=''
```

## Starting the server

```bash
# Start the dev server
npm run start
```

## Building the project

```bash
# Build the project
npm run build
```

## Extra commands

```bash
# Eslint
npm run lint

# Prettier
npm run format
```
