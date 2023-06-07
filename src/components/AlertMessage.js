import { useState } from "react";
import { motion, AnimatedPresence } from "framer-motion";
import "../css/Alert.scss";

const AlertMessage = () => {
    const [showAlert, setShowAlert] = useState(true);

    const handleAlert = () => {
        setShowAlert(false);
    }
    return showAlert ? (
        <motion.div
            className="coming-soon"
            initial={{ opacity: 0 }}
            animate={{
                transform: ["translatex(100px)", "translatex(0px)"], opacity: 1
            }}
            transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 200,
            }}
            exit={{
                opacity: 0
            }}
        >
            <p>Coming Soon.</p>
        </motion.div>
    ) : null
}
export default AlertMessage
