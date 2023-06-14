export const diagram = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:bpsim="http://www.bpsim.org/schemas/1.0" xmlns:drools="http://www.jboss.org/drools" xmlns:xsi="xsi" id="_XKDgYMBcEDufQ7OwTepg6w" targetNamespace="http://www.omg.org/bpmn20" exporter="jBPM Process Modeler" exporterVersion="2.0">
  <bpmn2:collaboration id="_D0BED198-6BEB-4C24-BC97-D201E83D2E37" name="Default Collaboration">
    <bpmn2:participant id="_BD769900-38D3-4D1C-8371-483ED8B000EE" name="Pool Participant" processRef="colliery" />
  </bpmn2:collaboration>
  <bpmn2:collaboration id="Collaboration_0nemc97">
    <bpmn2:participant id="Participant_00makbo" name="Software company" processRef="colliery" />
    <bpmn2:participant id="Participant_19yq2fp" name="Supplier" processRef="Process_0en2rh3" />
    <bpmn2:participant id="Participant_03ctuj8" name="Tester" processRef="Process_16mkze6" />
    <bpmn2:participant id="Participant_0jgyvbh" name="Test driver" processRef="Process_039dm6n" />
    <bpmn2:participant id="Participant_0jkxu88" name="Car manufaturer" processRef="Process_1b4eg7p" />
    <bpmn2:messageFlow id="Flow_07oypdn" name="Comission" sourceRef="Activity_1vqb1pz" targetRef="Event_1ip4xe6" />
    <bpmn2:messageFlow id="Flow_1oss6ls" name="Error Report" sourceRef="Activity_1qtg3gu" targetRef="Activity_1u7n5am" />
    <bpmn2:messageFlow id="Flow_0w4dwok" name="Software" sourceRef="Activity_021ll9w" targetRef="Event_1qhxaiz" />
    <bpmn2:messageFlow id="Flow_01wdghl" name="Software" sourceRef="Activity_05ygg4n" targetRef="Activity_15yk2ql" />
    <bpmn2:messageFlow id="Flow_0ulgkgz" name="Test result" sourceRef="Activity_033vx5p" targetRef="Activity_1541804" />
    <bpmn2:messageFlow id="Flow_0oicoq0" name="Order" sourceRef="Activity_0aof2f6" targetRef="Event_1ig3ehz" />
    <bpmn2:messageFlow id="Flow_0e6ohuw" name="Prototype" sourceRef="Activity_0rnp90h" targetRef="Activity_1tymab7" />
    <bpmn2:messageFlow id="Flow_1nw4w4t" name="Test report" sourceRef="Activity_0gu9gkd" targetRef="Activity_0mlqpx5" />
    <bpmn2:messageFlow id="Flow_1900634" name="accept assembly" sourceRef="Activity_1kds17c" targetRef="Activity_0lih5bt" />
    <bpmn2:messageFlow id="Flow_13sb5vy" name="Change request" sourceRef="Activity_1dh6hry" targetRef="Activity_1jwg494" />
    <bpmn2:messageFlow id="Flow_04qdrrt" name="Car" sourceRef="Activity_0x14h4g" targetRef="Event_0b6dhhi" />
    <bpmn2:messageFlow id="Flow_0ltm9u6" name="Test report" sourceRef="Activity_0hl5kdn" targetRef="Activity_1h6e1j7" />
  </bpmn2:collaboration>
  <bpmn2:process id="colliery" name="colliery" processType="Public" isExecutable="true" drools:packageName="com.example" drools:version="1.0" drools:adHoc="false">
    <bpmn2:laneSet />
    <bpmn2:startEvent id="Event_1ip4xe6" name="Receive Comission">
      <bpmn2:outgoing>Flow_1mpoe1n</bpmn2:outgoing>
      <bpmn2:messageEventDefinition id="MessageEventDefinition_1atu4sz" />
    </bpmn2:startEvent>
    <bpmn2:task id="Activity_0lpqkt2" name="Code">
      <bpmn2:incoming>Flow_1mpoe1n</bpmn2:incoming>
      <bpmn2:incoming>Flow_0xmz2ue</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0zyi9cb</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:task id="Activity_1348c0a" name="Find failure">
      <bpmn2:incoming>Flow_00msn3i</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0xmz2ue</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:sendTask id="Activity_021ll9w" name="Send code">
      <bpmn2:incoming>Flow_0zyi9cb</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0uuchx9</bpmn2:outgoing>
    </bpmn2:sendTask>
    <bpmn2:eventBasedGateway id="Gateway_0yti23b">
      <bpmn2:incoming>Flow_0uuchx9</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1h9x601</bpmn2:outgoing>
      <bpmn2:outgoing>Flow_1yi1cxi</bpmn2:outgoing>
    </bpmn2:eventBasedGateway>
    <bpmn2:sequenceFlow id="Flow_1mpoe1n" sourceRef="Event_1ip4xe6" targetRef="Activity_0lpqkt2" />
    <bpmn2:sequenceFlow id="Flow_0xmz2ue" sourceRef="Activity_1348c0a" targetRef="Activity_0lpqkt2" />
    <bpmn2:sequenceFlow id="Flow_0zyi9cb" sourceRef="Activity_0lpqkt2" targetRef="Activity_021ll9w" />
    <bpmn2:sequenceFlow id="Flow_00msn3i" sourceRef="Activity_1u7n5am" targetRef="Activity_1348c0a" />
    <bpmn2:sequenceFlow id="Flow_0uuchx9" sourceRef="Activity_021ll9w" targetRef="Gateway_0yti23b" />
    <bpmn2:sequenceFlow id="Flow_1h9x601" sourceRef="Gateway_0yti23b" targetRef="Activity_1u7n5am" />
    <bpmn2:sequenceFlow id="Flow_1yi1cxi" sourceRef="Gateway_0yti23b" targetRef="Activity_1541804" />
    <bpmn2:sequenceFlow id="Flow_1ugrkl8" sourceRef="Activity_1541804" targetRef="Activity_05ygg4n" />
    <bpmn2:sequenceFlow id="Flow_1apzw23" sourceRef="Activity_05ygg4n" targetRef="Event_0ierkhx" />
    <bpmn2:receiveTask id="Activity_1u7n5am" name="Receive error report">
      <bpmn2:incoming>Flow_1h9x601</bpmn2:incoming>
      <bpmn2:outgoing>Flow_00msn3i</bpmn2:outgoing>
    </bpmn2:receiveTask>
    <bpmn2:receiveTask id="Activity_1541804" name="Receive test succes">
      <bpmn2:incoming>Flow_1yi1cxi</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1ugrkl8</bpmn2:outgoing>
    </bpmn2:receiveTask>
    <bpmn2:sendTask id="Activity_05ygg4n" name="Deliver software">
      <bpmn2:incoming>Flow_1ugrkl8</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1apzw23</bpmn2:outgoing>
    </bpmn2:sendTask>
    <bpmn2:endEvent id="Event_0ierkhx" name="End">
      <bpmn2:incoming>Flow_1apzw23</bpmn2:incoming>
    </bpmn2:endEvent>
  </bpmn2:process>
  <bpmn2:process id="Process_0en2rh3">
    <bpmn2:task id="Activity_0fnp9tp" name="Develop concept">
      <bpmn2:incoming>Flow_1v5vnk9</bpmn2:incoming>
      <bpmn2:incoming>Flow_0gb69rn</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0gmztag</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:startEvent id="Event_1ig3ehz" name="Get order">
      <bpmn2:outgoing>Flow_1v5vnk9</bpmn2:outgoing>
      <bpmn2:messageEventDefinition id="MessageEventDefinition_0835142" />
    </bpmn2:startEvent>
    <bpmn2:sendTask id="Activity_1vqb1pz" name="Comission software">
      <bpmn2:incoming>Flow_0gmztag</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1488o4n</bpmn2:outgoing>
    </bpmn2:sendTask>
    <bpmn2:task id="Activity_1crnq2o" name="Build prototypes">
      <bpmn2:incoming>Flow_1488o4n</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0r3oqm3</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:sequenceFlow id="Flow_1v5vnk9" sourceRef="Event_1ig3ehz" targetRef="Activity_0fnp9tp" />
    <bpmn2:sequenceFlow id="Flow_0gb69rn" sourceRef="Activity_1jwg494" targetRef="Activity_0fnp9tp" />
    <bpmn2:sequenceFlow id="Flow_0gmztag" sourceRef="Activity_0fnp9tp" targetRef="Activity_1vqb1pz" />
    <bpmn2:sequenceFlow id="Flow_1488o4n" sourceRef="Activity_1vqb1pz" targetRef="Activity_1crnq2o" />
    <bpmn2:sequenceFlow id="Flow_0r3oqm3" sourceRef="Activity_1crnq2o" targetRef="Activity_15yk2ql" />
    <bpmn2:sequenceFlow id="Flow_0mnhica" sourceRef="Activity_15yk2ql" targetRef="Activity_0rnp90h" />
    <bpmn2:sequenceFlow id="Flow_0r5z2rf" sourceRef="Activity_0rnp90h" targetRef="Activity_0mlqpx5" />
    <bpmn2:sequenceFlow id="Flow_11mi10u" sourceRef="Activity_0mlqpx5" targetRef="Gateway_1dcuow8" />
    <bpmn2:sequenceFlow id="Flow_0pu81or" sourceRef="Gateway_1dcuow8" targetRef="Activity_0lih5bt" />
    <bpmn2:sequenceFlow id="Flow_06jqc1p" sourceRef="Gateway_1dcuow8" targetRef="Activity_1jwg494" />
    <bpmn2:sequenceFlow id="Flow_0xp24ng" sourceRef="Activity_0lih5bt" targetRef="Event_0ii0w0x" />
    <bpmn2:receiveTask id="Activity_15yk2ql" name="Receive software">
      <bpmn2:incoming>Flow_0r3oqm3</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0mnhica</bpmn2:outgoing>
    </bpmn2:receiveTask>
    <bpmn2:receiveTask id="Activity_0mlqpx5" name="recive test report">
      <bpmn2:incoming>Flow_0r5z2rf</bpmn2:incoming>
      <bpmn2:outgoing>Flow_11mi10u</bpmn2:outgoing>
    </bpmn2:receiveTask>
    <bpmn2:sendTask id="Activity_0rnp90h" name="Send prototype">
      <bpmn2:incoming>Flow_0mnhica</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0r5z2rf</bpmn2:outgoing>
    </bpmn2:sendTask>
    <bpmn2:eventBasedGateway id="Gateway_1dcuow8">
      <bpmn2:incoming>Flow_11mi10u</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0pu81or</bpmn2:outgoing>
      <bpmn2:outgoing>Flow_06jqc1p</bpmn2:outgoing>
    </bpmn2:eventBasedGateway>
    <bpmn2:receiveTask id="Activity_0lih5bt" name="Recive assembly accepted">
      <bpmn2:incoming>Flow_0pu81or</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0xp24ng</bpmn2:outgoing>
    </bpmn2:receiveTask>
    <bpmn2:receiveTask id="Activity_1jwg494" name="Recive change Request">
      <bpmn2:incoming>Flow_06jqc1p</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0gb69rn</bpmn2:outgoing>
    </bpmn2:receiveTask>
    <bpmn2:endEvent id="Event_0ii0w0x" name="End">
      <bpmn2:incoming>Flow_0xp24ng</bpmn2:incoming>
    </bpmn2:endEvent>
  </bpmn2:process>
  <bpmn2:process id="Process_16mkze6">
    <bpmn2:sequenceFlow id="Flow_1au90zr" sourceRef="Event_1qhxaiz" targetRef="Gateway_14ym5p8" />
    <bpmn2:startEvent id="Event_1qhxaiz" name="Receive code">
      <bpmn2:outgoing>Flow_1au90zr</bpmn2:outgoing>
      <bpmn2:messageEventDefinition id="MessageEventDefinition_08q91su" />
    </bpmn2:startEvent>
    <bpmn2:exclusiveGateway id="Gateway_14ym5p8">
      <bpmn2:incoming>Flow_1au90zr</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1d3iop3</bpmn2:outgoing>
      <bpmn2:outgoing>Flow_1njl7qh</bpmn2:outgoing>
    </bpmn2:exclusiveGateway>
    <bpmn2:sendTask id="Activity_1qtg3gu" name="Report error">
      <bpmn2:incoming>Flow_1d3iop3</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1s18rh7</bpmn2:outgoing>
    </bpmn2:sendTask>
    <bpmn2:sendTask id="Activity_033vx5p" name="Report test succes">
      <bpmn2:incoming>Flow_1njl7qh</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0hfkrny</bpmn2:outgoing>
    </bpmn2:sendTask>
    <bpmn2:exclusiveGateway id="Gateway_1x1pmrv">
      <bpmn2:incoming>Flow_1s18rh7</bpmn2:incoming>
      <bpmn2:incoming>Flow_0hfkrny</bpmn2:incoming>
      <bpmn2:outgoing>Flow_1xxo214</bpmn2:outgoing>
    </bpmn2:exclusiveGateway>
    <bpmn2:endEvent id="Event_0rj63o9" name="end">
      <bpmn2:incoming>Flow_1xxo214</bpmn2:incoming>
    </bpmn2:endEvent>
    <bpmn2:sequenceFlow id="Flow_1d3iop3" name="Error" sourceRef="Gateway_14ym5p8" targetRef="Activity_1qtg3gu" />
    <bpmn2:sequenceFlow id="Flow_1njl7qh" name="No error" sourceRef="Gateway_14ym5p8" targetRef="Activity_033vx5p" />
    <bpmn2:sequenceFlow id="Flow_1s18rh7" sourceRef="Activity_1qtg3gu" targetRef="Gateway_1x1pmrv" />
    <bpmn2:sequenceFlow id="Flow_0hfkrny" sourceRef="Activity_033vx5p" targetRef="Gateway_1x1pmrv" />
    <bpmn2:sequenceFlow id="Flow_1xxo214" sourceRef="Gateway_1x1pmrv" targetRef="Event_0rj63o9" />
  </bpmn2:process>
  <bpmn2:process id="Process_039dm6n">
    <bpmn2:task id="Activity_0pv23kq" name="Test car">
      <bpmn2:incoming>Flow_1epcnde</bpmn2:incoming>
      <bpmn2:outgoing>Flow_08relfs</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:startEvent id="Event_0b6dhhi" name="Receive Car">
      <bpmn2:outgoing>Flow_1epcnde</bpmn2:outgoing>
      <bpmn2:messageEventDefinition id="MessageEventDefinition_17mjtxs" />
    </bpmn2:startEvent>
    <bpmn2:task id="Activity_0i5g72y" name="Create Test report for assembly A">
      <bpmn2:incoming>Flow_08relfs</bpmn2:incoming>
      <bpmn2:outgoing>Flow_099fwtg</bpmn2:outgoing>
    </bpmn2:task>
    <bpmn2:sendTask id="Activity_0gu9gkd" name="Send test report">
      <bpmn2:incoming>Flow_099fwtg</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0eu4be1</bpmn2:outgoing>
    </bpmn2:sendTask>
    <bpmn2:sendTask id="Activity_0hl5kdn" name="Send manufacturer test report">
      <bpmn2:incoming>Flow_0eu4be1</bpmn2:incoming>
      <bpmn2:outgoing>Flow_0uw9gur</bpmn2:outgoing>
    </bpmn2:sendTask>
    <bpmn2:endEvent id="Event_0l2ew44" name="End">
      <bpmn2:incoming>Flow_0uw9gur</bpmn2:incoming>
    </bpmn2:endEvent>
    <bpmn2:sequenceFlow id="Flow_1epcnde" sourceRef="Event_0b6dhhi" targetRef="Activity_0pv23kq" />
    <bpmn2:sequenceFlow id="Flow_08relfs" sourceRef="Activity_0pv23kq" targetRef="Activity_0i5g72y" />
    <bpmn2:sequenceFlow id="Flow_099fwtg" sourceRef="Activity_0i5g72y" targetRef="Activity_0gu9gkd" />
    <bpmn2:sequenceFlow id="Flow_0eu4be1" sourceRef="Activity_0gu9gkd" targetRef="Activity_0hl5kdn" />
    <bpmn2:sequenceFlow id="Flow_0uw9gur" sourceRef="Activity_0hl5kdn" targetRef="Event_0l2ew44" />
  </bpmn2:process>
  <bpmn2:process id="Process_1b4eg7p">
    <bpmn2:sendTask id="Activity_0aof2f6" name="Order components" />
    <bpmn2:receiveTask id="Activity_1tymab7" name="Recive assembly" />
    <bpmn2:sendTask id="Activity_0x14h4g" name="Send car" />
    <bpmn2:sendTask id="Activity_1kds17c" name="accept assembly" />
    <bpmn2:sendTask id="Activity_1dh6hry" name="Change request" />
    <bpmn2:receiveTask id="Activity_1h6e1j7" name="Recive test report" />
  </bpmn2:process>
  <bpmndi:BPMNDiagram>
    <bpmndi:BPMNPlane bpmnElement="Collaboration_0nemc97">
      <bpmndi:BPMNShape id="Participant_00makbo_di" bpmnElement="Participant_00makbo" isHorizontal="true">
        <dc:Bounds x="420" y="180" width="810" height="290" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_10g87rj_di" bpmnElement="Event_1ip4xe6">
        <dc:Bounds x="472" y="291" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="471" y="334" width="52" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0lpqkt2_di" bpmnElement="Activity_0lpqkt2">
        <dc:Bounds x="530" y="269" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1348c0a_di" bpmnElement="Activity_1348c0a">
        <dc:Bounds x="530" y="370" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0ou9kp3_di" bpmnElement="Activity_021ll9w">
        <dc:Bounds x="650" y="269" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_168ioth_di" bpmnElement="Gateway_0yti23b">
        <dc:Bounds x="765" y="284" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0ketta4_di" bpmnElement="Activity_1u7n5am">
        <dc:Bounds x="820" y="340" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1541804_di" bpmnElement="Activity_1541804">
        <dc:Bounds x="930" y="269" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1czury9_di" bpmnElement="Activity_05ygg4n">
        <dc:Bounds x="1050" y="269" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0ierkhx_di" bpmnElement="Event_0ierkhx">
        <dc:Bounds x="1172" y="291" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1181" y="334" width="20" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1mpoe1n_di" bpmnElement="Flow_1mpoe1n">
        <di:waypoint x="508" y="309" />
        <di:waypoint x="530" y="309" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0xmz2ue_di" bpmnElement="Flow_0xmz2ue">
        <di:waypoint x="580" y="370" />
        <di:waypoint x="580" y="349" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0zyi9cb_di" bpmnElement="Flow_0zyi9cb">
        <di:waypoint x="630" y="309" />
        <di:waypoint x="650" y="309" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_00msn3i_di" bpmnElement="Flow_00msn3i">
        <di:waypoint x="820" y="410" />
        <di:waypoint x="630" y="410" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0uuchx9_di" bpmnElement="Flow_0uuchx9">
        <di:waypoint x="750" y="309" />
        <di:waypoint x="765" y="309" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1h9x601_di" bpmnElement="Flow_1h9x601">
        <di:waypoint x="790" y="334" />
        <di:waypoint x="790" y="380" />
        <di:waypoint x="820" y="380" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1yi1cxi_di" bpmnElement="Flow_1yi1cxi">
        <di:waypoint x="815" y="309" />
        <di:waypoint x="930" y="309" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1ugrkl8_di" bpmnElement="Flow_1ugrkl8">
        <di:waypoint x="1030" y="309" />
        <di:waypoint x="1050" y="309" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1apzw23_di" bpmnElement="Flow_1apzw23">
        <di:waypoint x="1150" y="309" />
        <di:waypoint x="1172" y="309" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Participant_19yq2fp_di" bpmnElement="Participant_19yq2fp" isHorizontal="true">
        <dc:Bounds x="210" y="-80" width="2010" height="230" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0fnp9tp_di" bpmnElement="Activity_0fnp9tp">
        <dc:Bounds x="310" y="30" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_18go9ut_di" bpmnElement="Event_1ig3ehz">
        <dc:Bounds x="252" y="52" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="256" y="113" width="47" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1esyd96_di" bpmnElement="Activity_1vqb1pz">
        <dc:Bounds x="440" y="30" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1crnq2o_di" bpmnElement="Activity_1crnq2o">
        <dc:Bounds x="570" y="30" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0v6i67n_di" bpmnElement="Activity_15yk2ql">
        <dc:Bounds x="1060" y="30" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_13rmjeb_di" bpmnElement="Activity_0mlqpx5">
        <dc:Bounds x="1400" y="30" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_151kley_di" bpmnElement="Activity_0rnp90h">
        <dc:Bounds x="1220" y="30" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1ehb2tv_di" bpmnElement="Gateway_1dcuow8">
        <dc:Bounds x="1835" y="45" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_098whjo_di" bpmnElement="Activity_0lih5bt">
        <dc:Bounds x="1950" y="30" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_12r23x0_di" bpmnElement="Activity_1jwg494">
        <dc:Bounds x="2080" y="-60" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0ii0w0x_di" bpmnElement="Event_0ii0w0x">
        <dc:Bounds x="2162" y="52" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2171" y="95" width="20" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1v5vnk9_di" bpmnElement="Flow_1v5vnk9">
        <di:waypoint x="288" y="70" />
        <di:waypoint x="310" y="70" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0gb69rn_di" bpmnElement="Flow_0gb69rn">
        <di:waypoint x="2080" y="-40" />
        <di:waypoint x="360" y="-40" />
        <di:waypoint x="360" y="30" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0gmztag_di" bpmnElement="Flow_0gmztag">
        <di:waypoint x="410" y="70" />
        <di:waypoint x="440" y="70" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1488o4n_di" bpmnElement="Flow_1488o4n">
        <di:waypoint x="540" y="70" />
        <di:waypoint x="570" y="70" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0r3oqm3_di" bpmnElement="Flow_0r3oqm3">
        <di:waypoint x="670" y="70" />
        <di:waypoint x="1060" y="70" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0mnhica_di" bpmnElement="Flow_0mnhica">
        <di:waypoint x="1160" y="70" />
        <di:waypoint x="1220" y="70" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0r5z2rf_di" bpmnElement="Flow_0r5z2rf">
        <di:waypoint x="1320" y="70" />
        <di:waypoint x="1400" y="70" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_11mi10u_di" bpmnElement="Flow_11mi10u">
        <di:waypoint x="1500" y="70" />
        <di:waypoint x="1835" y="70" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0pu81or_di" bpmnElement="Flow_0pu81or">
        <di:waypoint x="1885" y="70" />
        <di:waypoint x="1950" y="70" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_06jqc1p_di" bpmnElement="Flow_06jqc1p">
        <di:waypoint x="1860" y="45" />
        <di:waypoint x="1860" y="-20" />
        <di:waypoint x="2080" y="-20" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0xp24ng_di" bpmnElement="Flow_0xp24ng">
        <di:waypoint x="2050" y="70" />
        <di:waypoint x="2162" y="70" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Participant_03ctuj8_di" bpmnElement="Participant_03ctuj8" isHorizontal="true">
        <dc:Bounds x="620" y="505" width="490" height="230" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_19yktx0_di" bpmnElement="Event_1qhxaiz">
        <dc:Bounds x="672" y="607" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="657" y="650" width="67" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_14ym5p8_di" bpmnElement="Gateway_14ym5p8" isMarkerVisible="true">
        <dc:Bounds x="725" y="600" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1r2yzg4_di" bpmnElement="Activity_1qtg3gu">
        <dc:Bounds x="770" y="525" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1htshth_di" bpmnElement="Activity_033vx5p">
        <dc:Bounds x="880" y="635" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1x1pmrv_di" bpmnElement="Gateway_1x1pmrv" isMarkerVisible="true">
        <dc:Bounds x="985" y="600" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0rj63o9_di" bpmnElement="Event_0rj63o9">
        <dc:Bounds x="1052" y="607" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1061" y="650" width="19" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1au90zr_di" bpmnElement="Flow_1au90zr">
        <di:waypoint x="708" y="625" />
        <di:waypoint x="725" y="625" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1d3iop3_di" bpmnElement="Flow_1d3iop3">
        <di:waypoint x="750" y="600" />
        <di:waypoint x="750" y="565" />
        <di:waypoint x="770" y="565" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="712" y="543" width="25" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1njl7qh_di" bpmnElement="Flow_1njl7qh">
        <di:waypoint x="750" y="650" />
        <di:waypoint x="750" y="675" />
        <di:waypoint x="880" y="675" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="719" y="683" width="41" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1s18rh7_di" bpmnElement="Flow_1s18rh7">
        <di:waypoint x="870" y="565" />
        <di:waypoint x="1010" y="565" />
        <di:waypoint x="1010" y="600" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0hfkrny_di" bpmnElement="Flow_0hfkrny">
        <di:waypoint x="980" y="675" />
        <di:waypoint x="1010" y="675" />
        <di:waypoint x="1010" y="650" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1xxo214_di" bpmnElement="Flow_1xxo214">
        <di:waypoint x="1035" y="625" />
        <di:waypoint x="1052" y="625" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Participant_0jgyvbh_di" bpmnElement="Participant_0jgyvbh" isHorizontal="true">
        <dc:Bounds x="1300" y="428" width="670" height="122" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0pv23kq_di" bpmnElement="Activity_0pv23kq">
        <dc:Bounds x="1430" y="450" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_19lg27l_di" bpmnElement="Event_0b6dhhi">
        <dc:Bounds x="1364" y="472" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1351" y="448" width="62" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0i5g72y_di" bpmnElement="Activity_0i5g72y">
        <dc:Bounds x="1550" y="450" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_17exk6r_di" bpmnElement="Activity_0gu9gkd">
        <dc:Bounds x="1670" y="450" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_15i001r_di" bpmnElement="Activity_0hl5kdn">
        <dc:Bounds x="1790" y="450" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0l2ew44_di" bpmnElement="Event_0l2ew44">
        <dc:Bounds x="1912" y="472" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1920" y="515" width="20" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1epcnde_di" bpmnElement="Flow_1epcnde">
        <di:waypoint x="1400" y="490" />
        <di:waypoint x="1430" y="490" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_08relfs_di" bpmnElement="Flow_08relfs">
        <di:waypoint x="1530" y="490" />
        <di:waypoint x="1550" y="490" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_099fwtg_di" bpmnElement="Flow_099fwtg">
        <di:waypoint x="1650" y="490" />
        <di:waypoint x="1670" y="490" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0eu4be1_di" bpmnElement="Flow_0eu4be1">
        <di:waypoint x="1770" y="490" />
        <di:waypoint x="1790" y="490" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0uw9gur_di" bpmnElement="Flow_0uw9gur">
        <di:waypoint x="1890" y="490" />
        <di:waypoint x="1912" y="490" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Participant_0jkxu88_di" bpmnElement="Participant_0jkxu88" isHorizontal="true">
        <dc:Bounds x="380" y="820" width="1820" height="120" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1ulxmjg_di" bpmnElement="Activity_0aof2f6">
        <dc:Bounds x="430" y="840" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1s1i2gk_di" bpmnElement="Activity_1tymab7">
        <dc:Bounds x="1220" y="840" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1i81grs_di" bpmnElement="Activity_0x14h4g">
        <dc:Bounds x="1340" y="840" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1xcuvaf_di" bpmnElement="Activity_1kds17c">
        <dc:Bounds x="1950" y="840" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0wa3dh7_di" bpmnElement="Activity_1dh6hry">
        <dc:Bounds x="2080" y="840" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1uzmcu1_di" bpmnElement="Activity_1h6e1j7">
        <dc:Bounds x="1790" y="840" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_07oypdn_di" bpmnElement="Flow_07oypdn">
        <di:waypoint x="490" y="110" />
        <di:waypoint x="490" y="291" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="424" y="153" width="52" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1oss6ls_di" bpmnElement="Flow_1oss6ls">
        <di:waypoint x="820" y="525" />
        <di:waypoint x="820" y="410" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="742" y="476" width="61" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0w4dwok_di" bpmnElement="Flow_0w4dwok">
        <di:waypoint x="690" y="349" />
        <di:waypoint x="690" y="607" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="628" y="480" width="44" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_01wdghl_di" bpmnElement="Flow_01wdghl">
        <di:waypoint x="1100" y="269" />
        <di:waypoint x="1100" y="110" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1045" y="153" width="44" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0ulgkgz_di" bpmnElement="Flow_0ulgkgz">
        <di:waypoint x="930" y="635" />
        <di:waypoint x="930" y="339" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="869" y="475" width="51" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0oicoq0_di" bpmnElement="Flow_0oicoq0">
        <di:waypoint x="490" y="840" />
        <di:waypoint x="490" y="484" />
        <di:waypoint x="270" y="484" />
        <di:waypoint x="270" y="88" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="445" y="793" width="29" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0e6ohuw_di" bpmnElement="Flow_0e6ohuw">
        <di:waypoint x="1270" y="110" />
        <di:waypoint x="1270" y="840" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1206" y="793" width="48" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1nw4w4t_di" bpmnElement="Flow_1nw4w4t">
        <di:waypoint x="1720" y="450" />
        <di:waypoint x="1720" y="220" />
        <di:waypoint x="1450" y="220" />
        <di:waypoint x="1450" y="110" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1388" y="182" width="53" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1900634_di" bpmnElement="Flow_1900634">
        <di:waypoint x="2000" y="840" />
        <di:waypoint x="2000" y="110" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1908" y="781" width="83" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_13sb5vy_di" bpmnElement="Flow_13sb5vy">
        <di:waypoint x="2130" y="840" />
        <di:waypoint x="2130" y="20" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="2150" y="783" width="79" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_04qdrrt_di" bpmnElement="Flow_04qdrrt">
        <di:waypoint x="1382" y="840" />
        <di:waypoint x="1382" y="508" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1405" y="793" width="19" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0ltm9u6_di" bpmnElement="Flow_0ltm9u6">
        <di:waypoint x="1840" y="530" />
        <di:waypoint x="1840" y="840" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1763" y="793" width="53" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
  <bpmn2:relationship type="BPSimData">
    <bpmn2:extensionElements>
      <bpsim:BPSimData>
        <bpsim:Scenario id="default" name="Simulationscenario">
          <bpsim:ScenarioParameters />
          <bpsim:ElementParameters elementRef="_0C313EF8-CAFB-477B-B5CE-2E7F02DCBC02">
            <bpsim:TimeParameters>
              <bpsim:ProcessingTime>
                <bpsim:NormalDistribution mean="0" standardDeviation="0" />
              </bpsim:ProcessingTime>
            </bpsim:TimeParameters>
          </bpsim:ElementParameters>
          <bpsim:ElementParameters elementRef="_B343F128-78DA-45AE-96DD-7C3C2E411220">
            <bpsim:TimeParameters>
              <bpsim:ProcessingTime>
                <bpsim:NormalDistribution mean="0" standardDeviation="0" />
              </bpsim:ProcessingTime>
            </bpsim:TimeParameters>
            <bpsim:ResourceParameters>
              <bpsim:Availability>
                <bpsim:FloatingParameter value="0" />
              </bpsim:Availability>
              <bpsim:Quantity>
                <bpsim:FloatingParameter value="0" />
              </bpsim:Quantity>
            </bpsim:ResourceParameters>
            <bpsim:CostParameters>
              <bpsim:UnitCost>
                <bpsim:FloatingParameter value="0" />
              </bpsim:UnitCost>
            </bpsim:CostParameters>
          </bpsim:ElementParameters>
          <bpsim:ElementParameters elementRef="_06437CF6-5268-4976-8DF5-B70EDCAD3FEB">
            <bpsim:TimeParameters>
              <bpsim:ProcessingTime>
                <bpsim:NormalDistribution mean="0" standardDeviation="0" />
              </bpsim:ProcessingTime>
            </bpsim:TimeParameters>
            <bpsim:ResourceParameters>
              <bpsim:Availability>
                <bpsim:FloatingParameter value="0" />
              </bpsim:Availability>
              <bpsim:Quantity>
                <bpsim:FloatingParameter value="0" />
              </bpsim:Quantity>
            </bpsim:ResourceParameters>
            <bpsim:CostParameters>
              <bpsim:UnitCost>
                <bpsim:FloatingParameter value="0" />
              </bpsim:UnitCost>
            </bpsim:CostParameters>
          </bpsim:ElementParameters>
          <bpsim:ElementParameters elementRef="_37BAFD16-3994-4822-BE9E-78126185AC39">
            <bpsim:TimeParameters>
              <bpsim:ProcessingTime>
                <bpsim:NormalDistribution mean="0" standardDeviation="0" />
              </bpsim:ProcessingTime>
            </bpsim:TimeParameters>
          </bpsim:ElementParameters>
          <bpsim:ElementParameters elementRef="_01570EA4-234B-4CB1-9BFF-80D765EA8990">
            <bpsim:TimeParameters>
              <bpsim:ProcessingTime>
                <bpsim:NormalDistribution mean="0" standardDeviation="0" />
              </bpsim:ProcessingTime>
            </bpsim:TimeParameters>
            <bpsim:ResourceParameters>
              <bpsim:Availability>
                <bpsim:FloatingParameter value="0" />
              </bpsim:Availability>
              <bpsim:Quantity>
                <bpsim:FloatingParameter value="0" />
              </bpsim:Quantity>
            </bpsim:ResourceParameters>
            <bpsim:CostParameters>
              <bpsim:UnitCost>
                <bpsim:FloatingParameter value="0" />
              </bpsim:UnitCost>
            </bpsim:CostParameters>
          </bpsim:ElementParameters>
          <bpsim:ElementParameters elementRef="_CF82F0C1-5F74-4BE8-B5DC-41958AAC9657">
            <bpsim:TimeParameters>
              <bpsim:ProcessingTime>
                <bpsim:NormalDistribution mean="0" standardDeviation="0" />
              </bpsim:ProcessingTime>
            </bpsim:TimeParameters>
            <bpsim:ResourceParameters>
              <bpsim:Availability>
                <bpsim:FloatingParameter value="0" />
              </bpsim:Availability>
              <bpsim:Quantity>
                <bpsim:FloatingParameter value="0" />
              </bpsim:Quantity>
            </bpsim:ResourceParameters>
            <bpsim:CostParameters>
              <bpsim:UnitCost>
                <bpsim:FloatingParameter value="0" />
              </bpsim:UnitCost>
            </bpsim:CostParameters>
          </bpsim:ElementParameters>
        </bpsim:Scenario>
      </bpsim:BPSimData>
    </bpmn2:extensionElements>
    <bpmn2:source>_XKDgYMBcEDufQ7OwTepg6w</bpmn2:source>
    <bpmn2:target>_XKDgYMBcEDufQ7OwTepg6w</bpmn2:target>
  </bpmn2:relationship>
</bpmn2:definitions>

`