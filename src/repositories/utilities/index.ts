import { EntityTarget, ObjectLiteral } from "typeorm";
import { AppDataSource } from "../../data-source";
import { formatErrorMsg } from "../../utilities/errors/helper";
import { GENERIC_ERRORS } from "../../utilities/global/constants/errors";

export const findEntityById = async (entity: EntityTarget<ObjectLiteral>, id: number) => {
  try {
    return AppDataSource.getRepository(entity).findOneBy({ id });
  } catch (error) {
    console.error(error);
    throw new Error(formatErrorMsg("findEntityById", GENERIC_ERRORS.OPERATION.GET));
  }
};

export const findEntityByFullName = async (entity: EntityTarget<ObjectLiteral>, firstName: string, lastName: string) => {
  try {
    return AppDataSource.getRepository(entity).findOneBy({
      firstName,
      lastName,
    });
  } catch (error) {
    console.error(error);
    throw new Error(formatErrorMsg("findEntityByFullName", GENERIC_ERRORS.OPERATION.GET));
  }
};
