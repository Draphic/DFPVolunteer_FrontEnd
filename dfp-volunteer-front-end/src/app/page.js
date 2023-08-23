function FrontPageHeader({title}){
  return(<h1>{title}</h1>)
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FrontPageHeader title="Dublin Food Pantry Volunteer Sign-In"/>
    </main>
  )
}
