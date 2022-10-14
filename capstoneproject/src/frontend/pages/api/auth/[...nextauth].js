import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const url = process.env.NEXT_PUBLIC_SPRINGBOOT_API_URL
export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      // The name to display on the sign in form (e.g. 'Sign in with...')
    //   name: 'HypeHeads',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
    //   credentials: {
    //     email: {
    //       label: 'email',
    //       type: 'email',
    //     },
    //     password: { label: 'password', type: 'password' },
    //   },
      async authorize(credentials, req) {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };
        try {
            const res = await fetch(`${url}/api/sellers/login`, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                  'Content-Type': 'application/json',
                  // 'Accept-Language': 'en-US',
                },
              });
      
              const user = await res.json();
              console.log(user);
              if(!user){
                  throw new Error("Account does not exist")
              }
            //   if(user){
            //       return loginUser({password, user})
            //   }
              if (!res.ok) {
                throw new Error(user.exception);
              }
              // If no error and we have user data, return it
              if (res.ok && user) {
                return user;
              }
      
              // Return null if user data could not be retrieved
              return null;
        } catch (err) {
        // Handle Error Here
        console.error(err);
    }
        
        
      },
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    signIn: '/LoginPage',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: user.data.token,
          refreshToken: user.data.refreshToken,
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.accessTokenExpires = token.accessTokenExpires;

      return session;
    },
  },
  theme: {
    colorScheme: 'auto', // "auto" | "dark" | "light"
    brandColor: '', // Hex color code #33FF5D
    logo: '/vercel.svg', // Absolute URL to image
  },
  // Enable debug messages in the console if you are having problems
  debug: process.env.NODE_ENV === 'development',
});

// const signInUser = async ({password, user}){
//     if(!password){
//         throw new Error('Please enter your password');
//     }
//     return user;
// }

// const loginUser = async ({password, user}) => {
//     if(!user.password){
//       throw new Error("Accounts have to login with OAuth or Email.")
//     }
  
//     // const isMatch = await bcrypt.compare(password, user.password)
//     // if(!isMatch){
//     //   throw new Error("Password Incorrect.");
//     // }
  
//     // if(!user.email){
//     //   throw new Error("Success! Check your email.");
//     // }
  
//     return user;
//   }