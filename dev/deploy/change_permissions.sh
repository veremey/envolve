#!/bin/bash
cd /home/ubuntu/codedeploy-envolve
cp -r /home/ubuntu/codedeploy-envolve/* /var/www/html/envolve.staging312.com/
/etc/init.d/apache2 reload
