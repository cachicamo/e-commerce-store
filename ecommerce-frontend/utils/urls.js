export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_live_1C9E15D1F7721A42'

export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51IR3McGEcP7AKte6mYy69Je3Lnt9DOVUsZQnnctHd5ksHFxVQnCu7eu2Yk3SPPNqFyQ34X4qJz0bSBd8k2s7MRnj00suZrUD6J'

/**
 * Given an image return the Url 
 * Works for local and deployed strapis
 * @param {any} image 
 */
export const fromImageToUrl = (image) => {
  if (!image){
    return "/vercel.svg"
  }
  
  if(image.url.indexOf("/") === 0){
    return `${API_URL}${image.url}`
  }

  return image.url
}