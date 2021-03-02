export interface StoryI {
  id: number,
  time: string,
  user: string,
  userPicture: string
}

export interface Story {
  story: StoryI[]
}