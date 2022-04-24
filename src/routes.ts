import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateUser/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliveryClientController";
import { CreateClientController } from "./modules/clients/useCases/CreateClient/CreatClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDelivery/useCases/UpdateDeliverymanController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/UpdateEndDateController";
import { TestController } from "./modules/test/TestController";


const route = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();

const findAllDeliveriesClient = new FindAllDeliveriesController();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const deliveryController = new CreateDeliveryController();

const findAllAvailable = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();

const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController()

const updateEndDateController = new UpdateEndDateController();

route.post("/client/authenticate/", authenticateClientController.handle);
route.post("/deliveryman/authenticate/", authenticateDeliverymanController.handle);

route.post("/client/", createClientController.handle);
route.post("/deliveryman", createDeliverymanController.handle);

route.post('/delivery', ensureAuthenticateClient, deliveryController.handle);

route.put('/delivery/updateDeliveyman/:id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle);
route.put('/delivery/updateEnddate/:id', ensureAuthenticateDeliveryman, updateEndDateController.handle);

route.get('/delivery/available', ensureAuthenticateDeliveryman ,findAllAvailable.handle);

route.get('/client/deliveries', ensureAuthenticateClient, findAllDeliveriesClient.handle);

route.get('/deliveryman/deliveries', ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle);

const testeController = new TestController();
route.post('/client/getTime', testeController.handle);

export {route};