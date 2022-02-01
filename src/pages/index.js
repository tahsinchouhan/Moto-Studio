import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './Contact/contactForm';

export default function Home() {
  return (
  <>
  <ContactForm/>
  </>
  )
}
