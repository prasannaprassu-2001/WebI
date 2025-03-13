import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/TestimonialCarousel.scss";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, Tech Corp",
    message: "This product has transformed our business! Highly recommended.",
    image: "https://nursinginstitutegoa.org/wp-content/uploads/2016/01/tutor-8.jpg"
  },
  {
    name: "Jane Smith",
    position: "Marketing Head, XYZ Ltd",
    message: "Amazing service and support. Our team loves it!",
    image: "https://i0.wp.com/icrtcst24.rvscollege.ac.in/wp-content/uploads/2014/10/speaker-2-v2.jpg?fit=768%2C768&ssl=1"
  },
  {
    name: "Emily Johnson",
    position: "Founder, StartUp Co",
    message: "A game-changer in the industry. Fantastic experience!",
    image: "https://timesknowledge.wwmindia.com/content/2018/dec/image-2018-12-1161544521693.jpg"
  },
  {
    name: "Michael Brown",
    position: "CTO, FutureTech",
    message: "An innovative solution that exceeded our expectations!",
    image: "https://perfectglobalservices.com/wp-content/uploads/2017/09/speaker6-min.jpg"
  },
  {
    name: "Sarah Wilson",
    position: "COO, Digital Ventures",
    message: "Exceptional quality and support. Will use again!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNz3MA9cSVNNDANoGT4-lqze3ut2sRglkFWA&s"
  },
  {
    name: "David Lee",
    position: "Lead Developer, SoftTech",
    message: "Seamless integration and fantastic performance!",
    image: "https://cdn.britannica.com/43/172743-138-545C299D/overview-Barack-Obama.jpg?w=800&h=450&c=crop"
  }
];

export default function TestimonialCarousel() {
    const [index, setIndex] = useState(0);
  
    const prevTestimonial = () => {
      if (index > 0) {
        setIndex(index - 1);
      }
    };
  
    const nextTestimonial = () => {
      if (index < testimonials.length - 1) {
        setIndex(index + 1);
      }
    };
  
    return (
      <div className="testimonial-carousel">
       
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="testimonial-content"
        >
          <img src={testimonials[index].image} alt={testimonials[index].name} className="testimonial-image" />
          <p className="message">"{testimonials[index].message}"</p>
          <h3 className="name">{testimonials[index].name}</h3>
          <p className="position">{testimonials[index].position}</p>
        </motion.div>
        
        <button onClick={prevTestimonial} className="arrow left" disabled={index === 0}>
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextTestimonial} className="arrow right" disabled={index === testimonials.length - 1}>
          <ChevronRight size={24} />
        </button>
        
        <div className="dots">
          {testimonials.map((_, idx) => (
            <span key={idx} className={`dot ${idx === index ? "active" : ""}`} />
          ))}
        </div>
      </div>
    );
  }