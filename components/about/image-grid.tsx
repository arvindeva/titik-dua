import Image from "next/image";

export default function ImageGrid() {
  return (
    <section className="px-4 py-10 bg-td-beige">
      <div className="mb-2">
        <Image
          className="h-auto max-w-full"
          src="/images/about/1.jpg"
          alt="swimming-pool"
          width={400}
          height={300}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div className="grid gap-2">
          <div>
            <Image
              className="h-auto max-w-full"
              src="/images/about/2.jpg"
              alt="hotel"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/about/3.jpg"
              alt="hotel"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/about/4.jpg"
              alt="hotel"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/about/5.jpg"
              alt="hotel"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/about/6.jpg"
              alt="hotel"
              width={300}
              height={300}
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full "
              src="/images/about/7.jpg"
              alt="hotel"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
