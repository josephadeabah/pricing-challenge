"use client";
import { useState } from 'react';
import { Slider } from './components/Slider'; // Adjust based on the actual import path
import { Switch } from './components/Switch'; // Adjust based on the actual import path

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
  const [sliderValue, setSliderValue] = useState(200); // Default slider value

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const getPrice = () => {
    const selectedPlan = pricing.find(plan => plan.views === sliderValue);
    if (!selectedPlan) return 0;
    const price = isYearly ? selectedPlan.price * 0.75 : selectedPlan.price; // Apply 25% discount for yearly
    return price.toFixed(2);
  };

  return (
    <div className="flex flex-col items-center px-4 md:px-0">
      <div className="bg-[url('./images/pattern-circles.svg')] bg-no-repeat bg-contain w-full max-w-[392px] h-[162px] mx-auto mb-8">
        <h1 className="text-center text-2xl font-bold mt-8">Simple, traffic-based pricing</h1>
        <h2 className="text-center text-sm opacity-60 mt-2">Sign-up for our 30-day trial. No credit card required.</h2>
      </div>

      <article className="relative bg-white rounded-2xl mx-auto max-w-md mt-16 p-6 shadow-lg">
        <div className="text-center">
          <p className="font-semibold text-lg opacity-60 mt-2">{sliderValue}K Pageviews</p>
          <p className="font-bold text-[60px] flex justify-center items-baseline">
            ${getPrice()}
            <span className="text-xl font-normal ml-1">{isYearly ? '/year' : '/month'}</span>
          </p>

          <Slider
            value={[sliderValue]}
            onValueChange={values => setSliderValue(values[0])} // This receives an array
            min={0}
            max={1000}
            step={100}
            className="mt-6"
          />

          <div className="flex justify-center items-center mt-4">
            <p className="mr-4">Monthly Billing</p>
            <Switch
              checked={isYearly}
              onCheckedChange={handleToggle}
              className="mr-4"
            />
            <p className="ml-4">Yearly Billing <span className="bg-hsl(14, 92%, 95%) text-hsl(15, 100%, 70%) font-bold ml-1">25% discount</span></p>
          </div>

          <div className="mt-6 flex flex-wrap justify-between">
            <div className="mt-6">
              {['Unlimited websites', '100% data ownership', 'Email reports'].map((addon, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <p className="font-bold">{addon}</p>
                </div>
              ))}
            </div>

            <button className="bg-blue-900 text-white font-bold py-1 px-4 rounded-md mt-4 md:mt-0">Start my trial</button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Home;
