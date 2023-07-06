This template serves as a modular solution for deploying a VPC that includes a set of public and private subnets distributed across two Availability Zones. 
It sets up an internet gateway with a default route on the public subnets, 
and it also provisions a pair of NAT gateways (one in each Availability Zone) along with corresponding default routes on the private subnets.
    1. VPC is the actual isoloted virtual network that associated to the AWS account. It contains a network IP range (CIDR Block)
    2. InternetGateway is the VPC compoment that allows the VPC's resources (EC2) to access the internet
    3. InternetGatewayAttachment is simply to attach the VPC to the Internet Gateway
    4. PublicSubnet1 and PublicSubnet2 are 2 sub division of the VPC in which some publically accessible resources resign. IP ranges (CIDR blocks), prefixed by VPC are assigned them.  
    5. PrivateSubnet1 and PrivateSubnet2 are 2 sub division of the VPC in which the private resources (non accessible from the internet) resign. IP ranges (CIDR blocks), prefixed by VPC are assigned them.  
    6. NatGateway1 and NatGateway2, 2 Network Address Translation services that let the private resources in the private submets to connect to services outside of the VPC but external services cannot initiate connection with those private resources.
    7. NatGateway1EIP and NatGateway2EIP, 2 public IPs to assign the NAT gateways
    8. PublicRouteTable, contains set of rules, routes, to determione the where the network traffic from the public subnets  and the Internet Gateway is directed.
    9. PrivateRouteTable, contains set of rules, routes, to determione the where the network traffic from the private subnets and the NAT Gateway is directed.
    10. PublicSubnet1RouteTableAssociation and PublicSubnet2RouteTableAssociation create the association between the public subnets and the public route table
    11. PrivateSubnet1RouteTableAssociation and PrivateSubnet2RouteTableAssociation, create the association between the private subnets and the private route table.
    12. DefaultPublicRoute, creates a default rule to allow the public instances to communicate with the internet gateway
    13. DefaultPrivateRoute1 and DefaultPrivateRoute2, create default routes to allow private instances from both private subnets to communicate with both NAT gateways
    14. NoIngressSecurityGroup, ensures incoming traffic is not permitted from any source IP address or port.