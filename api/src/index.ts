import dotenv from 'dotenv';
import app from './app';

dotenv.config()

const main = async() => {
    try {

        const PORT = process.env.PORT
        app.listen(PORT,  () => {
            console.log(`Server is running on port ${PORT}`)
        })

    } catch (error) {
        if (error instanceof Error )
            console.error(error.message)
    }
}

main()