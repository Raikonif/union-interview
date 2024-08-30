import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button} from "@nextui-org/react";
import {FaPlus, FaTrash} from "react-icons/fa";
import AdminContext from "../context/AdminContext.tsx";
import {useContext} from "react";
import {RiEditBoxFill} from "react-icons/ri";

function AccountsTable() {
  const {onOpenAccount, onOpenDelete} = useContext(AdminContext);

  return (
      <div className="flex w-full mt-10">
        <Table aria-label="Example static collection table" className="flex w-full h-full pt-4 mx-4"
               topContent={<div className="justify-end w-full flex"><Button color="primary" onPress={onOpenAccount}>Crear
                 Cuenta <FaPlus/></Button>
               </div>}>
          <TableHeader>
            <TableColumn>Numero de Cuenta</TableColumn>
            <TableColumn>Nombre del Propietario</TableColumn>
            <TableColumn>Acciones</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>
                <div className="flex gap-5 items-center">
                  <button className="p-2 rounded-lg bg-gray-200 text-purple-600 hover:bg-gray-400" onClick={onOpenAccount}><RiEditBoxFill size={16}/>
                  </button>
                  <button className="p-2 rounded-lg bg-gray-200 text-red-600 hover:bg-gray-400" onClick={onOpenDelete}><FaTrash size={16}/>
                  </button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Zoey Lang</TableCell>
              <TableCell>Technical Lead</TableCell>
              <TableCell>
                <div className="flex gap-5 items-center">
                  <button className="p-2 rounded-lg bg-gray-200 text-purple-600 hover:bg-gray-400" onClick={onOpenAccount}><RiEditBoxFill size={16}/>
                  </button>
                  <button className="p-2 rounded-lg bg-gray-200 text-red-600 hover:bg-gray-400" onClick={onOpenDelete}><FaTrash size={16}/>
                  </button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Jane Fisher</TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>
                <div className="flex gap-5 items-center">
                  <button className="p-2 rounded-lg bg-gray-200 text-purple-600 hover:bg-gray-400" onClick={onOpenAccount}><RiEditBoxFill size={16}/>
                  </button>
                  <button className="p-2 rounded-lg bg-gray-200 text-red-600 hover:bg-gray-400" onClick={onOpenDelete}><FaTrash size={16}/>
                  </button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>
                <div className="flex gap-5 items-center">
                  <button className="p-2 rounded-lg bg-gray-200 text-purple-600 hover:bg-gray-400" onClick={onOpenAccount}><RiEditBoxFill size={16}/>
                  </button>
                  <button className="p-2 rounded-lg bg-gray-200 text-red-600 hover:bg-gray-400" onClick={onOpenDelete}><FaTrash size={16}/>
                  </button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
        );
        }

        export default AccountsTable;
