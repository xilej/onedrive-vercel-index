/**
 * This file contains the configuration used for customising the website, such as the folder to share,
 * the title, used Google fonts, site icons, contact info, etc.
 */
module.exports = {
  // This is what we use to identify who you are when you are initialising the website for the first time.
  // Make sure this is exactly the same as the email address you use to sign into your Microsoft account.
  // You can also put this in your Vercel's environment variable 'NEXT_PUBLIC_USER_PRINCIPLE_NAME' if you worry about
  // your email being exposed in public.
  userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || 'solitude@moulejun.onmicrosoft.com',

  // [OPTIONAL] This is the website icon to the left of the title inside the navigation bar. It should be placed under the
  // /public directory of your GitHub project (not your OneDrive folder!), and referenced here by its relative path to /public.
  icon: '/icons/favicon.png',

  // The name of your website. Present alongside your icon.
  title: "xilej's OneDrive",

  // The folder that you are to share publicly with onedrive-vercel-index. Use '/' if you want to share your root folder.
  baseDirectory: '/',

  // [OPTIONAL] This represents the maximum number of items that one directory lists, pagination supported.
  // Do note that this is limited up to 200 items by the upstream OneDrive API.
  maxItems: 100,

  // [OPTIONAL] We use Google Fonts natively for font customisations.
  // You can check and generate the required links and names at https://fonts.google.com.
  // googleFontSans - the sans serif font used in onedrive-vercel-index.
  googleFontSans: 'Inter',
  // googleFontMono - the monospace font used in onedrive-vercel-index.
  googleFontMono: 'Fira Mono',
  // googleFontLinks -  an array of links for referencing the google font assets.
  googleFontLinks: ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap'],

  // [OPTIONAL] The footer component of your website. You can write HTML here, but you need to escape double
  // quotes - changing " to \". You can write anything here, and if you like badges, generate some with https://shields.io
   footer: '<center><iframe frameborder=0  height=20px marginwidth=0 scrolling=no src="https://api.icodeq.com/TuoStudy-Counter/yiyan.html"></iframe></center><center><iframe frameborder=0  height=25px marginwidth=0 scrolling=no src="https://xilej.github.io/xilej.html"></iframe></center>Powered by: <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer"><img style="display: inline-block" src="https://img.shields.io/badge/Replit-black?style=flat&logo=Replit&logoColor=white" alt="vercel" /> </a> <a href="https://github.com/spencerwooo/onedrive-vercel-index" target="_blank" rel="noopener noreferrer"><img style="display: inline-block" src="https://img.shields.io/badge/onedrive--vercel--index-2C68C3?style=flat&logo=microsoft-onedrive&logoColor=white" alt="github" /> </a> <a target="_blank" href="https://nextjs.org/"><img style="display: inline-block" src="https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js&logoColor=white" alt="nextjs" /></a></center>',
  
  // [OPTIONAL] This is where you specify the folders that are password protected. It is an array of paths pointing to all
  // the directories in which you have .password set. Check the documentation for details.
  protectedRoutes: ['/🌞 Private folder/学习资料',],

  // [OPTIONAL] Use "" here if you want to remove this email address from the nav bar.
  email: 'mailto:1043865083@qq.com',

  // [OPTIONAL] This is an array of names and links for setting your social information and links.
  // In the latest update, all brand icons inside font awesome is supported and the icon to render is based on the name
  // you provide. See the documentation for details.
  links: [
    {
      name: 'GitHub',
      link: 'https://github.com/xilej',
    },

  ],

  // This is a day.js-style datetime format string to format datetimes in the app. Ref to
  // https://day.js.org/docs/en/display/format for detailed specification. The default value is ISO 8601 full datetime
  // without timezone and replacing T with space.
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
}
