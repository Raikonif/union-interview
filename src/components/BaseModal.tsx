import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import {ReactNode} from "react";

interface Props {
  children: ReactNode;
  action: () => Promise<void>;
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
  title: string
}

function BaseModal({children, isOpen, onOpenChange, onClose, title}: Props) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              {children}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cancelar
              </Button>
              <Button color="primary" onPress={onClose}>
                Confirmar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>);
}

export default BaseModal;
