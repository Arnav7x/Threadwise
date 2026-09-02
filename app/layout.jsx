import '../src/styles.css'

export const metadata = {
  title: 'Threadwise — Keep track of what matters',
  description: 'A memory system for the relationships behind your work.',
}

export default function Layout({ children }) {
  return <html lang="en"><body>{children}</body></html>
}
