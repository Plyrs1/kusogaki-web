interface TeamData {
  name: string
  pic: string
  profileUrl: string
  badges: Array<number>
}

interface TeamBadge {
  name: string
  color: string
}

export { TeamBadge, TeamData }
