'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';


export default function Section({children}) {
    return (
      <AnimatePresence>
        <motion.div
					key="modal"
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1, transition: {
						duration: 2.5,
						ease: [0.50, 0, 0.24, 1]}}}
					exit={{ y: -50, opacity: 0}} >
        {children}
        </motion.div>
      </AnimatePresence>
    )
}