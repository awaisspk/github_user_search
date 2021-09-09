// {
//   user(login: "awaisspk") {
//     name
//     bio
//     avatarUrl
//     createdAt
//     location
//     twitterUsername
//     websiteUrl
//     login

//     followers {
//       totalCount
//     }
//     following {
//       totalCount
//     }
//     repositories {
// 		totalCount
//     }
//   }
// }

export interface Idata {
  user: {
    name: string
    bio: string
    avatarUrl: string
    createdAt: string
    location: string
    twitterUsername: string
    websiteUrl: string
    login: string

    followers: {
      totalCount: number
    }
    following: {
      totalCount: number
    }
    repositories: {
      totalCount: number
    }
  }
}
