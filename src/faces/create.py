i = 1
while  i != 81 :
        print("import f"+str(i)+" from \'./faces/female/F ("+str(i)+").jpg\'"),
        i = i+1
i = 1
while  i != 45 :
        print("import m"+str(i)+" from \'./faces/male/M ("+str(i)+").jpg\'"),
        i = i+1

for i in range(81):
    print('f'+str(i)+',', end=" ")
print()

for i in range(44):
    print('m'+str(i)+',', end=" ")
print()