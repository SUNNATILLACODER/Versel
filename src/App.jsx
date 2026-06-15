import React from 'react';
import qiz from './assets/qiz.png'; 
import burger from './assets/burger.png'; 
import { Search, ShoppingBag, Play, ChevronLeft, ChevronRight, Star, Heart, Phone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 antialiased">
      

      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-emerald-500 text-white p-2 rounded-xl font-black text-xl tracking-wider">F</div>
          <span className="text-2xl font-black text-black">OODI</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <a href="#" className="text-emerald-500">Home</a>
          <a href="#" className="hover:text-emerald-500 transition-colors">Menu ▾</a>
          <a href="#" className="hover:text-emerald-500 transition-colors">Services ▾</a>
          <a href="#" className="hover:text-emerald-500 transition-colors">Offers</a>
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-gray-700 hover:text-emerald-500">
            <Search className="w-5 h-5" />
          </button>
          
          <button className="bg-emerald-500 text-white px-6 py-2.5 rounded-full font-medium flex items-center space-x-2 hover:bg-emerald-600 shadow-lg shadow-emerald-200 transition-all">
            <Phone className="w-4 h-4 fill-current" />
            <span>Contact</span>
          </button>
        </div>
      </nav>


<header className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
  <div className="space-y-8">
    <h1 className="text-4xl md:text-6xl font-black leading-tight text-gray-900">
      Dive into Delights <br />
      Of Delectable <span className="text-emerald-500">Food</span>
    </h1>

    <p className="text-gray-500 text-lg max-w-md leading-relaxed">
      Where Each Plate Weaves a Story of Culinary Mastery and Passionate
      Craftsmanship
    </p>

    <div className="flex flex-col sm:flex-row items-center gap-6">
      <button className="w-full sm:w-auto bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-emerald-200 hover:bg-blue-400 transition-all">
        Order Now
      </button>

      <button className="w-full sm:w-auto flex items-center justify-center space-x-3 font-medium text-gray-700 hover:text-blue-400">
        <span>Watch Video</span>

        <span className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
          <Play className="w-4 h-4 fill-current" />
        </span>
      </button>
    </div>
  </div>


  <div className="relative flex justify-center">

    <div className="absolute top-8 left-0 md:left-10 bg-white px-4 py-2 rounded-full shadow-xl z-20">
      <span className="text-rose-500 text-sm font-medium">
        Hot spicy Food 🌶️
      </span>
    </div>

    <div className="relative w-[350px] h-[350px] md:w-[520px] md:h-[520px]">

      <div className="absolute inset-0 bg-emerald-400 rounded-full"></div>
      <img
        src={qiz}
        alt="Hero Girl"
        className="
          absolute
          left-1/2
          bottom-[-30px]
          -translate-x-1/2
          w-[130%]
          max-w-none
          object-contain
          z-10
        "
      />

    </div>

  </div>
</header>
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <span className="text-rose-500 text-xs font-bold tracking-widest uppercase">Customer Favorites</span>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-12">Popular Categories</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: 'Main Dish', count: '(86 dishes)', img: burger },
            { title: 'Break Fast', count: '(12 break fast)', img: burger },
            { title: 'Dessert', count: '(48 dessert)', img: burger },
            { title: 'Browse All', count: '(255 items)', img: burger },
          ].map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-100/70 border border-gray-50 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-all cursor-pointer group hover:bg-blue-100">
              <div className="w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center p-4 group-hover:bg-emerald-900 transition-colors">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mt-4">{cat.title}</h3>
              <p className="text-gray-400 text-xs mt-1">{cat.count}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-rose-500 text-xs font-bold tracking-widest uppercase">Special Dishes</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">Standout Dishes <br />From Our Menu</h2>
          </div>
          <div className="flex space-x-4 mt-6 sm:mt-0">
            <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-emerald-500 hover:text-white transition-all shadow-md">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white hover:bg-emerald-600 transition-all shadow-md shadow-emerald-200">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: 'Fattoush salad', price: '24.00', rating: '4.9', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop&q=60' },
            { title: 'Vegetable salad', price: '26.00', rating: '4.6', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop&q=60' },
            { title: 'Egg vegi salad', price: '23.00', rating: '4.5', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop&q=60' },
          ].map((dish, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-100 border border-gray-50 relative group">
              <button className="absolute top-6 right-6 bg-emerald-500 text-white p-2.5 rounded-tr-2xl rounded-bl-2xl hover:bg-emerald-600 shadow-md">
                <Heart className="w-4 h-4 fill-current" />
              </button>
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300">
                <img src={dish.img} alt={dish.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-black text-xl text-gray-900">{dish.title}</h3>
              <p className="text-gray-400 text-xs mt-1">Description of the item</p>
              <div className="flex items-center justify-between mt-6">
                <span className="font-bold text-xl text-gray-900"><span className="text-rose-500 text-sm">$</span>{dish.price}</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="text-sm font-bold text-gray-700">{dish.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-center order-2 md:order-1">
          <div className="w-[280px] h-[340px] md:w-[340px] md:h-[420px] bg-emerald-400 rounded-t-full rounded-b-[40px] overflow-hidden relative border-[10px] border-emerald-100/50 flex items-center justify-center">
            <img 
              src={qiz} 
              alt="Customer Image" 
              className="w-full h-full object-cover object-center scale-[1.4]"
            />
          </div>
          <div className="absolute -bottom-4 bg-white px-5 py-2.5 rounded-full shadow-xl border border-gray-50 flex items-center space-x-2">
            <span className="text-sm font-bold text-gray-900">Our Best Friend! 🌟</span>
          </div>
        </div>

        <div className="space-y-6 order-1 md:order-2">
          <span className="text-rose-500 text-xs font-bold tracking-widest uppercase">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">What Our Customers <br />Say About Us</h2>
          <blockquote className="text-gray-500 text-base md:text-lg italic leading-relaxed">
            "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable"
          </blockquote>
          
          <div className="flex items-center space-x-4 pt-4">
            <div className="flex -space-x-3 ">
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" alt="user" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="user" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="user" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">Customer Feedback</h4>
              <div className="flex items-center space-x-1 text-xs text-gray-500 mt-0.5">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                <span className="font-bold text-gray-700">4.9</span>
                <span>(18.6k Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-rose-500 text-xs font-bold tracking-widest uppercase">Our Story & Services</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">Our Culinary Journey <br />And Services</h2>
          <p className="text-gray-500 leading-relaxed max-w-md">
            Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.
          </p>
          <button className="bg-emerald-500 text-white px-8 py-3.5 rounded-full font-semibold shadow-xl shadow-emerald-200 hover:bg-emerald-600 transition-all">
            Explore
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {[
            { title: 'CATERING', desc: 'Delight your guests with our flavors and presentation', icon: '🥗' },
            { title: 'FAST DELIVERY', desc: 'We deliver your order promptly to your door', icon: '⏰' },
            { title: 'ONLINE ORDERING', desc: 'Explore menu & order with ease using our Online Ordering', icon: '🛒' },
            { title: 'GIFT CARDS', desc: 'Give the gift of exceptional dining with Foodi Gift Cards', icon: '🎁' },
          ].map((srv, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl shadow-xl shadow-gray-100/70 border border-gray-50 flex flex-col items-center text-center hover:shadow-2xl transition-all group cursor-pointer">
              <span className="text-3xl mb-4 group-hover:scale-110 transition-transform">{srv.icon}</span>
              <h3 className="font-black text-xs tracking-wider text-emerald-500 uppercase">{srv.title}</h3>
              <p className="text-gray-400 text-[11px] leading-relaxed mt-2">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-50 mt-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-emerald-500 text-white p-1.5 rounded-lg font-black text-lg">F</div>
              <span className="text-xl font-black text-black">oodi</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Savor the artistry where every dish is a culinary masterpiece.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Useful links</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-emerald-500">About us</a></li>
              <li><a href="#" className="hover:text-emerald-500">Events</a></li>
              <li><a href="#" className="hover:text-emerald-500">Blogs</a></li>
              <li><a href="#" className="hover:text-emerald-500">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Main Menu</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-emerald-500">Home</a></li>
              <li><a href="#" className="hover:text-emerald-500">Offers</a></li>
              <li><a href="#" className="hover:text-emerald-500">Menus</a></li>
              <li><a href="#" className="hover:text-emerald-500">Reservation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="mailto:example@email.com" className="hover:text-emerald-500">example@email.com</a></li>
              <li><a href="tel:+64958245986" className="hover:text-emerald-500">+64 958 245 986</a></li>
              <li><span className="text-gray-400">Social media</span></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-6 border-t border-gray-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <p>© Copyright 2026 Oocado | All rights reserved</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <span className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center cursor-pointer">f</span>
            <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center cursor-pointer">in</span>
            <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center cursor-pointer">t</span>
          </div>
        </div>
      </footer>

    </div>
  );
}