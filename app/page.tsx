const Home = () => {
  return (
    <section className="flex-start flex-col paddings mb-16">
        Categories
        Posts
        Laod More
    </section>
  )
}

export default Home





// starting procedure
// npm install @headlessui/react cloudinary jsonwebtoken @types/jsonwebtoken graphql-request next-auth 


// npm install @grafbase/sdk --save-dev



// delete app and public folder and create app folder inside page.tsx just add heading using rafce

// and run the app - npm run dev

// you will get error: class NextRequest extends Request { ^ ReferenceError: Request is not defined

// for that solution: u need to install latest version of nodejs -> npm i node@lts and run the code again



// After the Footer Section, Just sign up https://grafbase.com/dashboard

// Then come to terminal, and install 'npx grafbase init --config-format typescript' from https://www.npmjs.com/package/@grafbase/sdk
//  This will create new folder of 'grafbase' so open grafbase.config.ts and clear it write the code 39:00