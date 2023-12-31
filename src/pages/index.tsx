import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { Button } from '~/components';

import { api } from '~/utils/api';
import styles from './index.module.css';

interface IFormInput {
  email: string;
  phoneNumber: string;
}

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  function onSubmit(data: IFormInput) {
    console.log('Submitted data:', data);
    router.push('/home');
  }

  // The "register" function returns an object with the following props: { name, ref, onChange, onBlur }
  const emailArgs = register('email', {
    required: true,
    pattern: { value: /\S+@\S+\.\S+/, message: 'Please provide a valid email address' },
  });
  const phoneNumberArgs = register('phoneNumber', {
    required: true,
    pattern: { value: /[0-9]{8,}/, message: 'Please provide a valid phone number' },
  });

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.background}>
        <div className={styles.main}>
          <h2 className={styles.header}>Personal info</h2>
          <form className={styles.form} noValidate>
            <div className={styles.row}>
              <label htmlFor="email">Email Address</label>
              <input {...emailArgs} className={styles.input} type="text" id="email" placeholder="john.doe@gmail.com" />
            </div>
            <p className={styles.warning}>{errors.email?.message}</p>
            <div className={styles.row}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                {...phoneNumberArgs}
                className={styles.input}
                type="text"
                id="phoneNumber"
                placeholder="12345678"
              />
            </div>
            <p className={styles.warning}>{errors.phoneNumber?.message}</p>
            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className={styles.authContainer}>
//       <p className={styles.showcaseText}>
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button className={styles.loginButton} onClick={sessionData ? () => void signOut() : () => void signIn()}>
//         {sessionData ? 'Sign out' : 'Sign in'}
//       </button>
//     </div>
//   );
// }
