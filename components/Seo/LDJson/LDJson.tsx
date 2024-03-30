import { getJsonLdString } from './getJsonLdString';

interface LDJsonProps {
  ldjson: any;
}

export default async function LDJson({ ldjson }: LDJsonProps) {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={getJsonLdString(ldjson)}
        key='product-jsonld'
      />
    </>
  );
}
