import Image from "next/image";

export default function ImageGrid() {
  return (
    <>
      <section className="xl:hidden px-4 py-10 bg-td-beige">
        <div className="mb-2">
          <Image
            className="h-auto max-w-full"
            src="/images/about/1.jpg"
            alt="swimming-pool"
            priority
            width={1200}
            height={800}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="grid gap-2">
            <div>
              <Image
                className="h-auto max-w-full"
                src="/images/about/2.jpg"
                alt="hotel"
                width={600}
                height={500}
                priority
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full "
                src="/images/about/3.jpg"
                alt="hotel"
                width={600}
                height={500}
                priority
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full "
                src="/images/about/4.jpg"
                alt="hotel"
                width={600}
                height={500}
                priority
              />
            </div>
          </div>
          <div className="grid gap-2">
            <div>
              <Image
                className="h-auto max-w-full "
                src="/images/about/5.jpg"
                alt="hotel"
                width={600}
                height={500}
                priority
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full "
                src="/images/about/6.jpg"
                alt="hotel"
                width={600}
                height={500}
                priority
              />
            </div>
            <div>
              <Image
                className="h-auto max-w-full "
                src="/images/about/7.jpg"
                alt="hotel"
                width={600}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="hidden xl:block px-4 py-10">
        <div className="grid grid-rows-5 grid-flow-col gap-4 h-[650px] xl:h-[800px]">
          <div className="row-span-3 col-span-2 bg-zinc-400 overflow-hidden">
            <div className="relative h-full w-full">
              <Image
                className="object-cover h-full w-full"
                src="/images/about/1.jpg"
                alt="swimming-pool"
                fill
                sizes="(max-width: 768px) 500px, (max-width: 1200px) 700px, 500px"
                priority
              />
            </div>
          </div>
          <div className="row-span-2 col-span-1 bg-zinc-400">
            <div className="relative h-full w-full">
              <Image
                className="object-cover"
                src="/images/about/6.jpg"
                alt="swimming-pool"
                fill
              />
            </div>
          </div>
          <div className="row-span-2 col-span-1 bg-zinc-400">
            <div className="relative h-full w-full">
              <Image
                className="object-cover"
                src="/images/about/4.jpg"
                alt="swimming-pool"
                fill
              />
            </div>
          </div>
          <div className="row-span-3 bg-zinc-400">
            <div className="relative h-full w-full">
              <Image
                className="object-cover"
                src="/images/about/5.jpg"
                alt="swimming-pool"
                fill
              />
            </div>
          </div>
          <div className="row-span-2 bg-zinc-400">
            <div className="relative h-full w-full">
              <Image
                className="object-cover"
                src="/images/about/2.jpg"
                alt="swimming-pool"
                fill
              />
            </div>
          </div>
          <div className="row-span-2 bg-zinc-400">
            <div className="relative h-full w-full">
              <Image
                className="object-cover"
                src="/images/about/3.jpg"
                alt="swimming-pool"
                fill
              />
            </div>
          </div>
          <div className="row-span-3 bg-zinc-400">
            <div className="relative h-full w-full">
              <Image
                className="object-cover"
                src="/images/about/7.jpg"
                alt="swimming-pool"
                fill
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
