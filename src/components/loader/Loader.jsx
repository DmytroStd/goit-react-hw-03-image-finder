import { AtomSpinner } from 'react-epic-spinners';
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <AtomSpinner color="rgb(15, 182, 42)" height="300" width="300" />
    </div>
  );
}
