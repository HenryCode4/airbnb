'use client'

import { useCallback, useEffect, useState } from "react";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
  }

const Modal: React.FC<ModalProps> = ({
    isOpen, 
    onClose, 
    onSubmit, 
    title, 
    body, 
    actionLabel, 
    footer, 
    disabled,
    secondaryAction,
    secondaryActionLabel
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(()=> {
        setShowModal(isOpen)
    }, [isOpen])

    const handleClose = useCallback(()=> {
        if(disabled){
            return;
        }
        setShowModal(false)

        //we added setTimeout so that it wont affcet our animation
        setTimeout(()=> {
            onClose();
        }, 300)
    }, [disabled, onClose]);

    const handleSubmit = useCallback(()=> {
        if(disabled){
            return
        }

        onSubmit();
    }, [disabled, onSubmit]);

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
          return;
        }
    
        secondaryAction();
      }, [secondaryAction, disabled]);
    
      if (!isOpen) {
        return null;
      }
  return (
    <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">

        </div>
    </>
    
  )
}

export default Modal