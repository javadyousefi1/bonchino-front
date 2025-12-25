"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Gift, Phone, Leaf, Award, Star, ShoppingCart, Tag } from "lucide-react";
import { Button } from "antd";
import Image from "next/image";

const flowerImages = [
  "0cee3862-8d24-4033-a1a4-e5bb342d9cbb.jpg",
  "2c09c9d4-0dc6-4103-818b-8dbf46bea89d.jpg",
  "33517024-f845-4b99-9da9-cd6e45a7e4a2.jpg",
  "3edd7114-ba51-46da-b6a7-e872363ecc08.jpg",
  "4256e5b5-abea-434a-a29f-b73966a26c21.jpg",
  "48202053-e248-40d9-967f-424b5cdc8529.jpg",
  "4e3ee136-2b2b-480e-8ec2-9c2fe690a560.jpg",
  "52a67c23-4c96-48bd-9cbb-f3d3a8ed2674.jpg",
  "6655c926-9fe6-4c6d-b330-38752317fcc2.jpg",
  "677c8975-8042-433c-842d-c721643d1c97.jpg",
  "694f8140-fd5b-48c5-969b-f1029cea602e.jpg",
  "99e41670-4837-4420-bd9b-1c28682d8d9e.jpg",
];

const features = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "گل‌های تازه",
    description: "تازه‌ترین و باکیفیت‌ترین گل‌ها، مستقیم از گلخانه",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "طراحی دلنشین",
    description: "دسته گل‌های منحصر به فرد با طراحی حرفه‌ای",
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: "ارسال رایگان",
    description: "ارسال سریع و رایگان به سراسر شهر",
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "دسته گل آفتابگردان",
    description: "ترکیبی زیبا از آفتابگردان و میخک",
    price: "۴۵۰,۰۰۰",
    image: "2c09c9d4-0dc6-4103-818b-8dbf46bea89d.jpg",
    badge: "پرفروش",
    discount: null,
  },
  {
    id: 2,
    name: "دسته گل رومانتیک",
    description: "گل‌های رز صورتی و سفید با تزیینات دلنشین",
    price: "۶۸۰,۰۰۰",
    image: "6655c926-9fe6-4c6d-b330-38752317fcc2.jpg",
    badge: null,
    discount: "۱۵٪",
  },
  {
    id: 3,
    name: "دسته گل بهاری",
    description: "گل‌های رنگارنگ فصل بهار",
    price: "۵۲۰,۰۰۰",
    image: "694f8140-fd5b-48c5-969b-f1029cea602e.jpg",
    badge: "جدید",
    discount: null,
  },
  {
    id: 4,
    name: "دسته گل لوکس",
    description: "ترکیب فاخر گل‌های وارداتی",
    price: "۸۵۰,۰۰۰",
    image: "3edd7114-ba51-46da-b6a7-e872363ecc08.jpg",
    badge: "ویژه",
    discount: null,
  },
];

const instagramOffers = [
  {
    id: 1,
    title: "تخفیف ویژه آخر هفته",
    description: "۲۰٪ تخفیف برای سفارشات آخر هفته",
    image: "4256e5b5-abea-434a-a29f-b73966a26c21.jpg",
    tag: "تخفیف ۲۰٪",
  },
  {
    id: 2,
    title: "دسته گل تولد",
    description: "پکیج ویژه جشن‌های تولد",
    image: "48202053-e248-40d9-967f-424b5cdc8529.jpg",
    tag: "پیشنهاد ویژه",
  },
  {
    id: 3,
    title: "گل‌های عروسی",
    description: "کلکسیون جدید گل‌های عروسی",
    image: "0cee3862-8d24-4033-a1a4-e5bb342d9cbb.jpg",
    tag: "جدید",
  },
  {
    id: 4,
    title: "هدیه عاشقانه",
    description: "بهترین انتخاب برای ابراز عشق",
    image: "52a67c23-4c96-48bd-9cbb-f3d3a8ed2674.jpg",
    tag: "محبوب",
  },
];

const testimonials = [
  {
    id: 1,
    name: "سارا احمدی",
    text: "کیفیت گل‌ها عالی بود و دقیقا سر وقت رسید. از خدمات بنچینو بسیار راضی هستم!",
    rating: 5,
  },
  {
    id: 2,
    name: "علی محمدی",
    text: "طراحی دسته گل فوق‌العاده بود. همسرم خیلی خوشحال شد. حتما دوباره سفارش می‌دهم.",
    rating: 5,
  },
  {
    id: 3,
    name: "مریم کریمی",
    text: "بهترین فروشگاه گل که تا حالا ازش خرید کردم. پشتیبانی عالی و محصولات با کیفیت.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Home() {
  const ctaSectionRef = useRef<HTMLElement>(null);
  const featuredProductsSectionRef = useRef<HTMLElement>(null);

  const scrollToCTA = () => {
    ctaSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToFeaturedProducts = () => {
    featuredProductsSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f9f7f4] via-[#fefdfb] to-white"
      >
        {/* Background Image with Blur */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/bg.jpg"
            alt="Background"
            fill
            className="object-cover blur-[5px]"
            priority
            sizes="100vw"
            quality={90}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f9f7f4]/90 via-[#fefdfb]/80 to-white/90"></div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#d4a574]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#e8d5c4]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[#c4a574]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-6xl">
          <div className="mb-8 sm:mb-12">
            <Image
              src="/logo.png"
              alt="لوگو بنچینو"
              width={160}
              height={160}
              className="mx-auto drop-shadow-2xl sm:w-[200px] sm:h-[200px]"
              priority
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-[#d4a574] via-[#c09560] to-[#b8884f] bg-clip-text text-transparent">
              خانه گل سحر آمیز
            </span>
            <br />
            <span className="text-[#2d2d2d] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              بنچینو
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
            زیبایی طبیعت را به هدیه ببخشید
            <br className="hidden sm:block" />
            <span className="text-[#d4a574] font-medium">هر دسته گل، داستانی از عشق و زیبایی</span>
          </p>

          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-4">
            <Button
              type="primary"
              size="large"
              icon={<Phone className="w-4 h-4 sm:w-5 sm:h-5" />}
              className="h-11 sm:h-14 px-6 sm:px-10 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToCTA}
            >
              تماس با ما
            </Button>
            <Button
              size="large"
              className="h-11 sm:h-14 px-6 sm:px-10 text-base sm:text-lg font-semibold border-2 border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-white transition-all"
              onClick={scrollToFeaturedProducts}
            >
              مشاهده گل‌ها
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block">
          <div className="w-6 h-10 border-2 border-[#d4a574]/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#e8d5c4]/10 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#2d2d2d]">
                چرا بنچینو؟
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="text-center p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#faf8f5] via-white to-[#f9f7f4] shadow-md hover:shadow-2xl transition-all border border-[#e8d5c4]/20"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-5 sm:mb-6 rounded-2xl bg-gradient-to-br from-[#d4a574] via-[#c09560] to-[#b8884f] text-white shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#2d2d2d]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section ref={featuredProductsSectionRef} className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#faf8f5] relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-[#d4a574]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#2d2d2d]">
              محصولات ویژه
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent mx-auto mb-4"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              بهترین انتخاب‌ها برای لحظات خاص شما
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-[#e8d5c4]/30"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={`/${product.image}`}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-[#d4a574] to-[#b8884f] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                      {product.badge}
                    </div>
                  )}
                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                      {product.discount}
                    </div>
                  )}
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#2d2d2d] group-hover:text-[#d4a574] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-bold text-[#d4a574]">
                        {product.price}
                      </span>
                      <span className="text-sm text-gray-500">تومان</span>
                    </div>
                    <Button
                      type="primary"
                      icon={<ShoppingCart className="w-4 h-4" />}
                      className="h-10 px-4 bg-gradient-to-r from-[#d4a574] to-[#b8884f] border-none hover:shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button
              size="large"
              className="h-12 px-10 text-base font-semibold border-2 border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-white transition-all"
            >
              مشاهده همه محصولات
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Instagram Offers Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#faf8f5] to-white relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-t from-[#e8d5c4]/10 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#2d2d2d]">
              پیشنهادات ویژه
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent mx-auto mb-4"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              آخرین تخفیف‌ها و پیشنهادات ویژه برای شما
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {instagramOffers.map((offer, index) => (
              <motion.div
                key={offer.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer group"
              >
                <Image
                  src={`/${offer.image}`}
                  alt={offer.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Tag Badge */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-[#d4a574] to-[#b8884f] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {offer.tag}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {offer.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#d4a574]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#2d2d2d]">
              نظرات مشتریان
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent mx-auto mb-4"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              آنچه مشتریان ما درباره خدمات بنچینو می‌گویند
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#faf8f5] to-white p-6 sm:p-8 rounded-3xl shadow-md hover:shadow-xl transition-all border border-[#e8d5c4]/20"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#d4a574] text-[#d4a574]"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4a574] to-[#b8884f] flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#2d2d2d]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">مشتری بنچینو</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#fefdfb] to-[#f9f7f4] relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#d4a574]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#2d2d2d]">
              گالری گل‌های ما
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#d4a574] to-transparent mx-auto mb-4"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              نمونه‌هایی از دسته گل‌های زیبا و منحصر به فرد ما
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          >
            {flowerImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer group"
              >
                <Image
                  src={`/${image}`}
                  alt={`گل ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl sm:rounded-3xl transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSectionRef} className="py-16 sm:py-24 bg-gradient-to-br from-[#d4a574] via-[#c09560] to-[#b8884f] text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              آماده سفارش هستید؟
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto opacity-95 px-4 leading-relaxed">
              همین الان با ما تماس بگیرید و دسته گل رویایی خود را سفارش دهید
            </p>
            <Button
              size="large"
              icon={<Phone className="w-4 h-4 sm:w-5 sm:h-5" />}
              className="h-12 sm:h-16 px-8 sm:px-12 text-base sm:text-xl font-bold bg-white text-[#d4a574] border-none hover:bg-gray-50 hover:scale-105 transition-all shadow-2xl"
            >
              ۰۹۳۶۷۲۷۰۳۲۱
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/logo.png"
                alt="لوگو بنچینو"
                width={80}
                height={80}
                className="mx-auto opacity-80 mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-[#d4a574] to-[#b8884f] bg-clip-text text-transparent">
                خانه گل سحر آمیز بنچینو
              </h3>
              <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto px-4">
                زیبایی طبیعت را به هدیه ببخشید
              </p>
            </motion.div>

            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500 text-sm sm:text-base">
                © ۱۴۰۴ خانه گل سحر آمیز بنچینو. تمامی حقوق محفوظ است.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
