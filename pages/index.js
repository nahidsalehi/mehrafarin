import Head from 'next/head'
import App from '../components/App'

export default function Home() {
  return (
    <div>
      <Head>

      <title>مهرآفرین - موسسه ی خیریه ی کودکان نیازمند</title>
        <link rel="icon" href="/favicon.ico" />

         {/* Font Awesome  */}
        <script src="https://kit.fontawesome.com/a66f2ffd71.js" crossOrigin="anonymous"></script>

        {/* CSS Stylesheet */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="styles.css" charSet='utf-8'></link>

        {/* Bootstrap Scripts */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>

        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cairo:wght@300;400;500;600&family=Markazi+Text:wght@400;500&family=Montserrat&family=Noto+Naskh+Arabic:wght@400;500&family=Noto+Nastaliq+Urdu&family=Noto+Sans+Arabic:wght@100;300;400;700&display=swap" rel="stylesheet"></link>

      </Head>

      <main>
        <App />
      </main>

    </div>
  )
}
