import LibraryNav from '@/components/LibraryNav';

export const metadata = {
  title: 'Engineering Notes Library | AK Notes',
  description:
    'Free interactive engineering notes for Diploma and B.Tech Mechanical Engineering students by Anubhab Karmakar, Lecturer at NHIT.',
};

export default function LibraryLayout({ children }) {
  return (
    <>
      <LibraryNav />
      {children}
    </>
  );
}
