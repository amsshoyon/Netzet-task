import React from "react"
import Button from "@/snippets/Button"

const Banner = () => {
    return (
        <section className='-mt-4 w-full pb-6 lg:mt-0 lg:py-14.5'>
            <div className='relative container flex flex-col items-center justify-center lg:flex-row lg:justify-between'>
                <div className='-z-10 mb-0 flex w-full justify-center px-5 lg:order-2 lg:mb-0 lg:w-1/2 lg:scale-125'>
                    <img src='/banner.png' alt='App Interface on Smartphone' className='h-full w-auto object-cover' />
                </div>
                <div className='w-full lg:w-1/2 xl:w-3/5'>
                    <div className='font-urbanist mb-5 text-center text-[25px] leading-[1.19] font-bold lg:text-start lg:text-4xl 2xl:mb-4 2xl:text-5xl 2xl:leading-[1.15]'>
                        <h2>Want to Turn Social Media Into a Profitable Career? </h2>
                        <h2 className='text-[#00E7F9] [text-shadow:0px_4px_4px_0px_#FC004E]'>Discover your way to success with Fametonic:</h2>
                    </div>

                    <ul className='iconic-list mb-4 leading-tight lg:mb-7 2xl:mb-10'>
                        <li className='text-base 2xl:text-xl'>Start growing your influence right away—no waiting required!</li>
                        <li className='text-base 2xl:text-xl'>Create viral TikToks and Reels step by step with easy-to-follow lessons</li>
                        <li className='text-base 2xl:text-xl'>Use a Personal AI Worker to boost your content</li>
                        <li className='text-base 2xl:text-xl'>Learn from expert-led courses designed for aspiring influencers</li>
                    </ul>

                    <div className='flex flex-col'>
                        <div className='mb-8 text-center lg:order-2 lg:mb-0 lg:text-start'>
                            <p className='mb-4 text-xs text-[#ABABAB] lg:mb-6.5 2xl:text-sm'>
                                By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
                            </p>
                            <p className='text-[10px] text-[#ABABAB] 2xl:text-xs'>Fametonic 2025 ©All Rights Reserved.</p>
                        </div>
                        <div className='mb-4 flex w-fit flex-col items-center justify-start lg:mb-7.5 2xl:mb-10'>
                            <Button className='mb-2.5 2xl:mb-3'>Get Started</Button>
                            <p className='text-xs 2xl:text-sm'>1-minute quiz for personalized Insights</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
