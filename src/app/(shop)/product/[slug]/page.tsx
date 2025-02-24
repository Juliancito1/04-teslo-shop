import { initialData } from "@/seed/seed";

interface Props {
  params: {
    slug: string;
  };
}

export default function ({ params }: Props) {
  const { slug } = params;

  const product = initialData.products.find((product) => product.slug === slug);
  

  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
}
