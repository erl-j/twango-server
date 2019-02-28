import {MigrationInterface, QueryRunner,getRepository} from "typeorm";
import SuperOrder from "../entity/SuperOrder";

export class MockSuperOrders1551369621928 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const userRepository = getRepository(SuperOrder);
        
        let superOrder = new SuperOrder();
        superOrder.createdAt=new Date();
        superOrder.storeName="the party store";
        
        await userRepository.save(superOrder);

        superOrder = new SuperOrder();
        superOrder.createdAt=new Date();
        superOrder.storeName="the pet store";
        
        await userRepository.save(superOrder);

        superOrder = new SuperOrder();
        superOrder.createdAt=new Date();
        superOrder.storeName="the bicycle store";
        
        await userRepository.save(superOrder);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
