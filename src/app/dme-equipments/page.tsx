"use client";

import styles from "@/assets/css/DMEEquipments.module.css";
import Image from "next/image";

import hero from "@/assets/images/dme-service-hero.jpg";

import KneeBraces from "@/assets/images/knee-braces.jpg";
import BraceSleves from "@/assets/images/brace-sleves.jpg";
import CgmMonitors from "@/assets/images/cgm-monitors.jpg";
import Wheelchairs from "@/assets/images/wheelchairs.jpg";
import UvbLightWands from "@/assets/images/uvb-light-wands.jpg";
import HipBraces from "@/assets/images/hip-braces.jpg";
import TenseUnit from "@/assets/images/tense-unit.jpg";
import LymphedemaPumpMassagers from "@/assets/images/lymphedema-pump-massagers.jpg";

import whyGetDmeServies from "@/assets/images/whyGetDmeServies.png";
import whyChooseUs from "@/assets/images/whychooseus.png";

import ProductSlider from "@/components/ProductSlider";
import Reviews from "@/components/Reviews";

interface Product {
  id: number;
  image: any;
  title: string;
  description: string;
  link: string;
}

export default function dmeEquipments() {
  const data: Product[] = [
    {
      id: 1,
      image: Wheelchairs,
      title: "Wheelchairs",
      description:
        "Discover our range of comfortable and durable wheelchairs, designed for ease of use and enhanced mobility. Choose the perfect model to fit your lifestyle and needs.",
      link: "#contactUs",
    },
    {
      id: 2,
      image: CgmMonitors,
      title: "CGM Monitors",
      description:
        "Stay on top of your health with our continuous glucose monitors, providing real-time blood sugar data for optimal diabetes management. Easy to use and highly accurate.",
      link: "#contactUs",
    },
    {
      id: 3,
      image: KneeBraces,
      title: "Knee Braces",
      description:
        "Support and stabilize your joints with our high-quality braces, designed for maximum comfort and effectiveness. Ideal for injury recovery and daily use.",
      link: "#contactUs",
    },
    {
      id: 4,
      image: HipBraces,
      title: "Hip Braces",
      description:
        "Support and stabilize your joints with our high-quality braces, designed for maximum comfort and effectiveness. Ideal for injury recovery and daily use.",
      link: "#contactUs",
    },
    {
      id: 5,
      image: BraceSleves,
      title: "Brace Sleeves",
      description:
        "Experience optimal joint support with our elastic sleeves, which improve circulation and provide gentle compression therapy.",
      link: "#contactUs",
    },
    {
      id: 6,
      image: UvbLightWands,
      title: "UVB Light Wands",
      description:
        "Portable UVB therapy wands effective for managing skin conditions like psoriasis with controlled UVB exposure.",
      link: "#contactUs",
    },
    {
      id: 7,
      image: TenseUnit,
      title: "TENS Unit",
      description:
        "Portable Transcutaneous Electrical Nerve Stimulation device that offers pain relief through soothing electric pulses.",
      link: "#contactUs",
    },
    {
      id: 8,
      image: LymphedemaPumpMassagers,
      title: "Lymphedema Pump Massagers",
      description:
        "Designed for promoting lymphatic drainage, these massagers reduce swelling and improve circulation with adjustable pressure levels.",
      link: "#contactUs",
    },
  ];

  return (
    <main>
      <section className={styles.hero}>
        <Image src={hero} alt="dme-equipment-hero" />
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <span>Service</span>
          <h1>Strengthen Health with DME Equipments</h1>
          <p>
            Discover high-end hospital-grade products like TENS units,
            wheelchairs, knee braces, UVB light wands, and CGM monitors, among
            others. You may manage medical issues more easily with our DME
            solutions, which are made to provide the best possible comfort and
            support. Increase the flexibility, mobility, and standard of living
            for yourself or your loved ones.
          </p>
        </div>
      </section>
      <section className={`${styles.whyGetDmeServies} container`}>
        <div className={styles.content}>
          <h2>
            <hr />
            Why Get Durable Medical Equipment Equipments?
          </h2>
          <p>
            Durable Medical Equipment (DME) enhances the lives of individuals
            managing chronic conditions, recovering from injuries, or seeking
            greater independence. Brace sleeves, hip braces, and knee braces are
            among the products that offer essential support for joint stability
            and mobility. Wheelchairs guarantee dependable mobility and
            independence for health management, while CGM monitors enable
            accurate glucose tracking.
          </p>
          <p>
            Solutions such as TENS units for pain management and UVB light wands
            for light therapy are used to address therapeutic needs. DME is
            crucial for enhancing comfort, mobility, and general well-being
            because lymphedema pump massagers also encourage circulation and
            lessen swelling.
          </p>
          <div className={styles.stage}>
            <div className={styles.item}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                viewBox="0 0 512 512"
              >
                <path
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M256 176v160M336 256H176"
                />
              </svg>
              <h3>Enhance Mobility and Independence</h3>
              <p>
                For individualized care, use hospital-grade equipment from the
                comfort of your home, such as TENS units, wheelchairs, UVB light
                wands, knee and hip braces, brace sleeves, CGM monitors, and
                lymphedema pump massagers.
              </p>
            </div>
            <div className={styles.item}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                viewBox="0 0 512 512"
              >
                <path
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M256 176v160M336 256H176"
                />
              </svg>
              <h3>Cost-Effective with Insurance Coverage</h3>
              <p>
                The majority of DME devices are covered by insurance plans,
                which increases patient access to and affordability of necessary
                medical equipment.
              </p>
            </div>
            <div className={styles.item}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                viewBox="0 0 512 512"
              >
                <path
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M256 176v160M336 256H176"
                />
              </svg>
              <h3>Tailored to Your Medical Needs</h3>
              <p>
                Every product we provide has been recommended and authorized by
                medical professionals, guaranteeing that it satisfies your
                particular medical needs.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <Image src={whyGetDmeServies} alt="" />
        </div>
      </section>
      <section className={styles.chossingSquadMedSupplies}>
        <h2>Choosing Reshape Equipments</h2>
        <div className={styles.stage}>
          <div className={styles.item}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
              viewBox="0 0 512 512"
            >
              <path
                d="M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M69 153.99l187 110 187-110M256 463.99v-200"
              />
            </svg>
            <div className={styles.content}>
              <h3>Free Delivery</h3>
              <p>Order over $120</p>
            </div>
          </div>
          <div className={styles.item}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
              viewBox="0 0 512 512"
            >
              <rect
                x="32"
                y="80"
                width="448"
                height="256"
                rx="16"
                ry="16"
                transform="rotate(180 256 208)"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M64 384h384M96 432h320"
              />
              <circle
                cx="256"
                cy="208"
                r="80"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <path
                d="M480 160a80 80 0 01-80-80M32 160a80 80 0 0080-80M480 256a80 80 0 00-80 80M32 256a80 80 0 0180 80"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
            <div className={styles.content}>
              <h3>Get Refund</h3>
              <p>Within 30 Days Return</p>
            </div>
          </div>
          <div className={styles.item}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
              viewBox="0 0 512 512"
            >
              <rect
                x="48"
                y="144"
                width="416"
                height="288"
                rx="48"
                ry="48"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <path
                d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <path d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z" />
            </svg>
            <div className={styles.content}>
              <h3>Safe Payment</h3>
              <p>100% Secure Payments</p>
            </div>
          </div>
          <div className={styles.item}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.icon}
              viewBox="0 0 512 512"
            >
              <path
                d="M83 384c-13-33-35-93.37-35-128C48 141.12 149.33 48 256 48s208 93.12 208 208c0 34.63-23 97-35 128"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <path
                d="M108.39 270.13l-13.69 8h0c-30.23 17.7-31.7 72.41-3.38 122.2s75.87 75.81 106.1 58.12h0l13.69-8a16.16 16.16 0 005.78-21.87L130 276a15.74 15.74 0 00-21.61-5.87zM403.61 270.13l13.69 8h0c30.23 17.69 31.74 72.4 3.38 122.19s-75.87 75.81-106.1 58.12h0l-13.69-8a16.16 16.16 0 01-5.78-21.87L382 276a15.74 15.74 0 0121.61-5.87z"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="32"
              />
            </svg>
            <div className={styles.content}>
              <h3>24/7 Customer Service</h3>
              <p>Always Available Support</p>
            </div>
          </div>
        </div>
      </section>
      <ProductSlider heading="Some Of Our Products" data={data} />
      <section className={`${styles.someKeyBenefits} container`}>
        <div className={styles.image}>
          <Image src={whyChooseUs} alt="why-choose-us" />
        </div>
        <div className={styles.content}>
          <h2>
            <hr />
            Some Key Benefits
          </h2>
          <p>
            For those managing a variety of medical conditions, durable medical
            equipment (DME) is specifically made to promote comfort, improve
            health, and offer dependable assistance. These goods support people
            in preserving their functioning and independence, both of which are
            necessary for living an active, satisfying life.
          </p>
          <p>
            DME, which includes anything from mobility assistance to therapeutic
            devices, is essential for enhancing quality of life and fostering
            improved health outcomes. DME provides the resources people need to
            live more comfortably, confidently, and peacefully, whether they are
            recuperating from surgery, managing a chronic illness, or looking
            for more mobility.
          </p>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                viewBox="0 0 512 512"
              >
                <path
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  fill="none"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M368 192L256.13 320l-47.95-48M191.95 320L144 272M305.71 192l-51.55 59"
                />
              </svg>
              Restore Mobility and Independence
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                viewBox="0 0 512 512"
              >
                <path
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  fill="none"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M368 192L256.13 320l-47.95-48M191.95 320L144 272M305.71 192l-51.55 59"
                />
              </svg>
              Improve Overall Quality of Life
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                viewBox="0 0 512 512"
              >
                <path
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  fill="none"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M368 192L256.13 320l-47.95-48M191.95 320L144 272M305.71 192l-51.55 59"
                />
              </svg>
              Convenient At-Home Care
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                viewBox="0 0 512 512"
              >
                <path
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  fill="none"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M368 192L256.13 320l-47.95-48M191.95 320L144 272M305.71 192l-51.55 59"
                />
              </svg>
              Cost-Efficient with Insurance Coverage
            </li>
          </ul>
        </div>
      </section>
      <Reviews />
    </main>
  );
}
