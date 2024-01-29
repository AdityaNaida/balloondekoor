import styles from '@/components/dynamic/dynamic.module.css';
import Image from 'next/image';
const Dynamiclower = () => {
  return (
    <>
    <div className={styles.dynamic_lower}>
     <div className={styles.dynamic__products}>
      <div className={styles.dynamic__filters}>
       <span className={styles.filter__text}>
        <Image src="/filter-icon.svg" height={20} width={20} alt="filter icon"/>
        Quick Filter
       </span>
      </div>
     </div>
    </div>
    </>
  )
}

export default Dynamiclower