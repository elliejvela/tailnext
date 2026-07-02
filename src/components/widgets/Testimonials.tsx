import Link from 'next/link';
import { TestimonialsProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import CTA from '../common/CTA';
import ItemTestimonial from '../common/ItemTestimonial';

//TODO: Refactor
import Image from 'next/image';
import awsBrandImg from '~/assets/images/aws-logo.png'

const Testimonials = ({
  header,
  testimonials,
  callToAction,
  isTestimonialUp,
  id,
  hasBackground = false,
}: TestimonialsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    {header && <Headline header={header} titleClass="text-2xl sm:text-3xl text-[#1F0024]" />}
    <div className="flex items-stretch justify-center">
      <div className="w-full max-w-xs bg-[#1F0024] p-10 rounded-xl">
      <Image
        className="mx-auto w-full"
        src={awsBrandImg}
        width={100}
        height={100}
        alt={'AWS logo'}
        sizes="(max-width: 768px) 100vw, 432px"
        placeholder="blur"
        quality={50}
      />
    </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {testimonials.map(
          ({ name, job, testimonial, image, href }, index) =>
            testimonial && (
              <div
                key={`item-testimonial-${index}`}
                className={`card max-w-sm h-full ${
                  !callToAction && href
                    ? 'hover:border-primary-600 hover:shadow-lg hover:transition hover:duration-100'
                    : ''
                }`}
              >
                {!callToAction && href ? (
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    <ItemTestimonial
                      name={name}
                      job={job}
                      testimonial={testimonial}
                      isTestimonialUp={isTestimonialUp}
                      hasDividerLine={true}
                      startSlice={0}
                      endSlice={150}
                      image={image}
                      containerClass="h-full"
                      panelClass="justify-between items-stretch w-full h-full"
                      nameJobClass="text-left rtl:text-right"
                      jobClass="text-sm"
                      imageClass="mr-4 rtl:mr-0 rtl:ml-4 h-10 w-10 rounded-full"
                    />
                  </Link>
                ) : (
                  <ItemTestimonial
                    name={name}
                    job={job}
                    testimonial={testimonial}
                    isTestimonialUp={isTestimonialUp}
                    hasDividerLine={true}
                    startSlice={0}
                    endSlice={150}
                    image={image}
                    containerClass="h-full"
                    panelClass="justify-between items-stretch w-full h-full"
                    nameJobClass="text-left rtl:text-right"
                    jobClass="text-sm"
                    imageClass="mr-4 rtl:mr-0 rtl:ml-4 h-10 w-10 rounded-full"
                  />
                )}
              </div>
            ),
        )}
      </div>
    </div>
    {callToAction && (
      <CTA
        callToAction={callToAction}
        containerClass="flex justify-center mx-auto w-fit mt-8 md:mt-12"
        linkClass="btn"
      />
    )}
  </WidgetWrapper>
);

export default Testimonials;
