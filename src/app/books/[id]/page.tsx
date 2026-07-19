
import BookDetails from "@/app/_components/bookDetails/BookDetails";
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}
async function page({ params }: PageProps) {
  
  const { id } = await params;

  return (
    <div>
      <BookDetails id={id} />
    </div>
  );
}

export default page;
