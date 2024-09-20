"use client";
import { useState } from 'react';
import { Slider } from './components/Slider';
import { Switch } from './components/Switch';
import { Checkbox } from './components/Checkbox';

const pricing = [
  { views: 0, price: 0 },
  { views: 100, price: 5 },
  { views: 200, price: 10 },
  { views: 300, price: 15 },
  { views: 400, price: 20 },
  { views: 500, price: 25 },
  { views: 600, price: 30 },
  { views: 700, price: 35 },
  { views: 800, price: 40 },
  { views: 900, price: 45 },
  { views: 1000, price: 50 },
];

const Home = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [sliderValue, setSliderValue] = useState(200);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const getPrice = () => {
    const selectedPlan = pricing.find(plan => plan.views === sliderValue);
    if (!selectedPlan) return 0;
    const price = isYearly ? selectedPlan.price * 0.75 : selectedPlan.price;
    return price.toFixed(2);
  };

  return (
    <div className="flex flex-col items-center h-full px-4 gap-8">
      <div className="w-full max-w-[392px] bg-[url('./images/pattern-circles.svg')] py-8 mt-12 bg-no-repeat bg-contain bg-center mx-auto">
        <h1 className="text-center text-2xl font-bold relative z-10">Simple, traffic-based pricing</h1>
        <h2 className="text-center text-sm opacity-60 mt-2 relative z-10 text-gray-500">Sign-up for our 30-day trial. No credit card required.</h2>
      </div>

      <div className="relative bg-white rounded-lg mx-auto h-fit max-h-lg w-full max-w-md px-4 py-4 mt-10 shadow-xl">
        <div className="flex flex-col items-center">
          {/* Centered above the slider on mobile */}
          <p className="font-semibold text-sm opacity-60 mt-2 md:hidden text-center">{sliderValue}K Pageviews</p>
          {/* For desktop layout */}
          <div className="hidden md:flex justify-between items-baseline w-full mt-2">
            <p className="font-semibold text-sm opacity-60 text-gray-500">{sliderValue}K Pageviews</p>
            <p className="font-bold text-[60px] flex items-baseline">
              ${getPrice()}
              <span className="text-sm font-semibold ml-1 text-gray-400">{isYearly ? '/year' : '/month'}</span>
            </p>
          </div>
          <Slider
            value={[sliderValue]}
            onValueChange={values => setSliderValue(values[0])}
            min={0}
            max={1000}
            step={100}
            className="mt-6"
          />
          {/* Centered below the slider on mobile */}
          <div className="flex flex-col items-center mt-2 md:hidden">
            <p className="font-bold text-[60px] flex items-baseline">
              ${getPrice()}
              <span className="text-sm font-normal text-gray-400 ml-1">{isYearly ? '/year' : '/month'}</span>
            </p>
          </div>
          <div className="flex justify-between gap-2 items-center text-xs font-medium text-gray-400 mt-12">
            <p className="">Monthly Billing</p>
            <Switch
              checked={isYearly}
              onCheckedChange={handleToggle}
              className="hover:bg-teal-300"
            />
            <p className="hidden md:block">Yearly Billing
              <span className="bg-orange-50 px-2 text-orange-500 rounded-full text-xs font-bold">
                <span className='hidden md:inline'>25% </span> discount
              </span>
            </p>
            {/* This line keeps the discount on all devices but hides "discount" on mobile */}
            <p className="md:hidden">Yearly Billing
              <span className="bg-orange-50 px-2 text-orange-500 rounded-full text-xs font-bold">
                25%
              </span>
            </p>
          </div>
          <div className="mt-6 flex flex-col md:flex-row w-full md:justify-between items-center">
            <div className="mt-6 flex flex-col items-center md:items-start">
              {['Unlimited websites', '100% data ownership', 'Email reports'].map((addon, index) => (
                <div key={index} className="flex items-center mb-2">
                  <Checkbox className="mr-2 shadow-none border-none text-teal-400" defaultChecked />
                  <p className="font-normal text-gray-400 text-sm">{addon}</p>
                </div>
              ))}
            </div>
            <div className='flex justify-center items-center mt-4 md:mt-0'>
              <button className="bg-blue-900 text-blue-100 py-2 px-6 text-sm rounded-full">Start my trial</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
