import localFont from "next/font/local";

const montserratRegularNC = localFont({ src: './Montserrat-Regular.ttf'})
const montserratMediumNC = localFont({ src: './Montserrat-Medium.ttf'})

export const montserratRegular = montserratRegularNC.className
export const montserratMedium = montserratMediumNC.className